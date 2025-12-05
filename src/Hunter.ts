import { Weapon } from "./interface/Moves";
import { Buff } from "./interface/Moves";
import { MonsterCreator } from "./Monster";
import { monster } from "./main";




export class HunterCreator {
    private id = 1;
    name: string;
    weapon: Weapon;
    damageWeapon: Weapon;
    lifePointsHunter: number;
    armor: number;
    dodgeChanceBase: number;
    attackChanceBase: number;
    activeBuffs: Buff[] = [];
    maxLifePoints: number
    lifestealEffect: { lifesteal: number, duration: number } | null = null

    constructor(
        name: string,
        weapon: Weapon,
        damageWeapon: Weapon,
        lifePointsHunter: number,
        armor: number,
        dodgeChanceBase: number,
        attackChanceBase: number,
        maxLifePoints: number
    ) {
        this.name = name;
        this.weapon = weapon;
        this.damageWeapon = damageWeapon;
        this.lifePointsHunter = lifePointsHunter;
        this.armor = armor;
        this.dodgeChanceBase = dodgeChanceBase;
        this.attackChanceBase = attackChanceBase;
        this.maxLifePoints = maxLifePoints
    }



    nextTurn() {

        this.activeBuffs = this.activeBuffs
            .map(buff => ({ ...buff, duration: buff.duration - 1 }))
            .filter(buff => buff.duration > 0);

        if (this.activeBuffs.length > 0) {
            console.log("Buffs ativos:");
            this.activeBuffs.forEach(buff => {
                console.log(
                    `• ${buff.name} | +${(buff.buffValue - 1) * 100}% dano | duração: ${buff.duration}`
                );
            });

        }
    }




    attackMonster(monster: MonsterCreator): void {
        const totalSkills = this.weapon.skills.length
        const randomSkill = Math.floor(Math.random() * totalSkills)
        const skillDrawn = this.weapon.skills[randomSkill]

        if (!skillDrawn) return


        if (this.attackChanceBase > monster.dodgeChanceBase) {
            console.log(`O caçador ${this.name} irá usar ${skillDrawn.nameSkill}`)


            skillDrawn.action(this.weapon.baseDamage, skillDrawn.damageSkill, this, monster, skillDrawn.buff)

            if (skillDrawn.typeOfSkill.includes("Buff") && skillDrawn.buff) {
                console.log(`${this.name} ativou o buff: ${skillDrawn.buff.name}`)

                this.activeBuffs.push({ ...skillDrawn.buff })



                this.activeBuffs.forEach(buff => {
                    console.log(
                        `Buff ativo: ${buff.name} | +${(buff.buffValue - 1) * 100}% dano | duração: ${buff.duration}`
                    );
                });

            }
            if (monster.lifePointsMonster <= 0) {
                console.log(`O monstro ${monster.name} foi derrotado, o caçador resistiu com ${this.lifePointsHunter} de vida restante`)
            }
        } else {
            console.log(`O monstro  ${monster.name} desviou`)
        }
    }





}

