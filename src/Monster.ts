import { BodyPart } from "./interface/Moves";
import { monster } from "./main";
import { wait } from "./Util";




export class MonsterCreator {
    name: string;
    damageMonster: number;
    lifePointsMonster: number;
    dodgeChanceBase: number;
    attackChanceBase: number;
    weakness: {
        Fire?: number;
        Ice?: number;
        Thunder?: number;
        Water?: number;
        Dragon?: number;
    };
    bodyParts: {
        [key: string]: BodyPart
    }
    statusBuildup: {
        Paralysis: number
        Poison: number
        Blast: number
    }
    activeStatusEffects: {
        isParalyzed: boolean
        paralysisTurnsLeft: number
        isPoisoned: boolean
        poisonTurnsLeft: number
        poisonDamage: number
    }

    constructor(
        name: string,
        damageMonster: number,
        lifePointsMonster: number,
        dodgeChanceBase: number,
        attackChanceBase: number,
        weakness: {
            Fire?: number;
            Ice?: number;
            Thunder?: number;
            Water?: number;
            Dragon?: number;
        },
        bodyParts: {
            [key: string]: BodyPart
        }

    ) {
        this.name = name;
        this.damageMonster = damageMonster;
        this.lifePointsMonster = lifePointsMonster;
        this.dodgeChanceBase = dodgeChanceBase;
        this.attackChanceBase = attackChanceBase;
        this.weakness = weakness;
        this.bodyParts = bodyParts
        this.statusBuildup = {
            Paralysis: 0,
            Poison: 0,
            Blast: 0
        }
        this.activeStatusEffects = {
            isParalyzed: false,
            paralysisTurnsLeft: 0,
            isPoisoned: false,
            poisonTurnsLeft: 0,
            poisonDamage: 50
        }

    }

    applyStatusTurn(): boolean {
        let canMove = true

        if (this.activeStatusEffects.isPoisoned) {
            this.lifePointsMonster -= this.activeStatusEffects.poisonDamage
            this.activeStatusEffects.poisonTurnsLeft--

            console.log("Veneno Aplicado")
            console.log(`O monstro ${monster.name} tomou ${this.activeStatusEffects.poisonDamage} de dano por veneno`)

            if (this.activeStatusEffects.poisonTurnsLeft <= 0) {
                this.activeStatusEffects.isPoisoned = false
                console.log(`O efeito do veneno passou`)
            }
        }

        if (this.activeStatusEffects.isParalyzed) {
            canMove = false
            this.activeStatusEffects.paralysisTurnsLeft--

            console.log(`O monstro ${monster.name} está totalmente paralisado e não pode atacar e nem desviar`)

            if (this.activeStatusEffects.paralysisTurnsLeft <= 0) {
                this.activeStatusEffects.isParalyzed = false
                console.log(`O monstro ${monster.name} se recuperou da paralisia`)
            }
        }

        return canMove
    }


    async attackHunter(hunter: {
        lifePointsHunter: number;
        dodgeChanceBase: number;
        name: string;
    }): Promise<void> {
        await wait(500);
        if (this.attackChanceBase > hunter.dodgeChanceBase) {
            await wait(1500);
            const damage = hunter.lifePointsHunter - this.damageMonster;
            const damageDealt = hunter.lifePointsHunter - damage;
            const lifeActualHunter = hunter.lifePointsHunter - damageDealt;
            hunter.lifePointsHunter = lifeActualHunter;
            console.log("\n");
            console.log(
                `O monstro ${this.name}, deu ${damageDealt} de dano ao caçador ${hunter.name}, agora ele tem ${lifeActualHunter} de vida restante`
            );
            await wait(1500);
            if (hunter.lifePointsHunter <= 0) {
                console.log("\n");
                console.log(
                    `Derrota, o monstro derrotou o caçador, o monstro ${this.name} resistiu com ${this.lifePointsMonster} de vida restante`
                );
                await wait(1500);
            }
        } else {
            console.log("\n");
            console.log(`O caçador ${hunter.name} desviou com sucesso`);
        }
        await wait(1500);
    }
}
