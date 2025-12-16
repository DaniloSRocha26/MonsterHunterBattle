import { BodyPart } from "./interface/Moves";
import { monster } from "./main";
import { getRandomValue, wait } from "./Util";

import { HunterCreator } from "./Hunter";



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
        isStunned: boolean
        stunTurnsLeft: number
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
            poisonDamage: 50,
            isStunned: false,
            stunTurnsLeft: 0
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

        if (this.activeStatusEffects.isStunned) {
            canMove = false
            this.activeStatusEffects.stunTurnsLeft--
            console.log(`O ${monster.name} foi atordoado pelo Offset e perdeu o turno `)

            if (this.activeStatusEffects.stunTurnsLeft <= 0) {
                this.activeStatusEffects.isStunned = false
                console.log(`O ${monster.name} se recuperou do stun`)
            }
        }

        return canMove
    }


    async attackHunter(hunter: HunterCreator): Promise<void> {
        await wait(500);
        if (this.attackChanceBase > hunter.dodgeChanceBase) {

            if (hunter.hasOffsetSkil()) {
                console.log(` ${hunter.name} prepara o Offset`)
                await wait(800)

                const OffsetRoll = getRandomValue(0, 100)
                const offSetDifficulty = 30

                if (OffsetRoll > offSetDifficulty) {
                    console.log(`Sucesso no Offset`)
                    console.log(`${hunter.name} bloqueou perfeitamente o ataque`)

                    this.activeStatusEffects.isStunned = true
                    this.activeStatusEffects.stunTurnsLeft = 1

                    return
                } else {
                    (console.log(`Falha no offSet: ${OffsetRoll}%, o ataque irá acertar`))
                }
            }
            console.log(`O monstro atacará o caçador ${hunter.name}`)
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
