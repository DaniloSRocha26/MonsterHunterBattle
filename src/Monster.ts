import { BodyPart } from "./interface/Moves";
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

    }

    rollDodgeChance() { }

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
