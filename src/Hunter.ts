import { Weapon } from "./interface/Moves";
import { Buff } from "./interface/Moves";
import { MonsterCreator } from "./Monster";
import { monster } from "./main";
import { getRandomValue, wait } from "./Util";

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
    maxLifePoints: number;
    potions: number = 10;
    potionHealAmount: number = 50;

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
        this.maxLifePoints = maxLifePoints;
    }

    nextTurn() {
        this.activeBuffs = this.activeBuffs
            .map((buff) => ({ ...buff, duration: buff.duration - 1 }))
            .filter((buff) => buff.duration > 0);

        if (this.activeBuffs.length > 0) {
            console.log("Buffs ativos:");
            this.activeBuffs.forEach((buff) => {
                if (buff.type === "lifesteal") {
                    console.log("\n");
                    console.log(
                        `${buff.name} | + ${buff.buffValue} de cura por ataque | duração: ${buff.duration}`
                    );
                } else {
                    console.log("\n");
                    console.log(
                        `• ${buff.name} | +${(buff.buffValue - 1) * 100
                        }% dano | duração: ${buff.duration}`
                    );
                }
            });
        }
    }

    usePotion() {
        if (this.potions <= 0) {
            console.log("Sem poções!");
            return;
        }

        this.potions--;
        const healing = Math.min(
            this.lifePointsHunter + this.potionHealAmount,
            this.maxLifePoints
        );
        this.lifePointsHunter = healing;

        console.log(`Usou poção!, ${this.potions} restantes`);
    }

    hasOffsetSkil(): boolean {
        return this.weapon.skills.some(skill => skill.typeOfSkill.includes("Offset"))
    }


    async attackMonster(monster: MonsterCreator): Promise<void> {
        const totalSkills = this.weapon.skills.length;
        const randomSkill = Math.floor(Math.random() * totalSkills);
        const skillDrawn = this.weapon.skills[randomSkill];

        if (!skillDrawn) return;

        if (this.attackChanceBase > monster.dodgeChanceBase) {
            console.log("\n");
            console.log(
                `O caçador ${this.name} irá usar ${skillDrawn.nameSkill}`
            );
            await wait(1500);

            skillDrawn.action(
                this.weapon.baseDamage,
                skillDrawn.damageSkill,
                this,
                monster,
                this.weapon
            );
            await wait(1500);

            if (skillDrawn.typeOfSkill.includes("Buff") && skillDrawn.buffs) {
                skillDrawn.buffs.forEach((buff) => {
                    console.log("\n");
                    console.log(`${this.name} ativou o buff: ${buff.name}`);

                    this.activeBuffs.push({ ...buff });
                });
                await wait(1500);

                this.activeBuffs.forEach((buff) => {
                    if (buff.type === "lifesteal") {
                        console.log("\n");
                        console.log(
                            `Buff ativo: ${buff.name} | +${buff.buffValue} de cura por ataque | duração: ${buff.duration}  `
                        );
                    } else {
                        console.log("\n");
                        console.log(
                            `Buff ativo: ${buff.name} | +${(buff.buffValue - 1) * 100
                            }% de dano | duração: ${buff.duration}`
                        );
                    }
                });
                await wait(1500);




                if (monster.lifePointsMonster <= 0) {
                    console.log("\n");
                    console.log(
                        `O monstro ${monster.name} foi derrotado, o caçador resistiu com ${this.lifePointsHunter} de vida restante`
                    );
                }
                await wait(1500);
            }
        }
        else {
            console.log("\n");
            console.log(`O monstro ${monster.name} desviou`);

        }
        await wait(1500);
    }
}
