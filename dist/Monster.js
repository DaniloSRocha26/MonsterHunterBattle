"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterCreator = void 0;
const main_1 = require("./main");
const Util_1 = require("./Util");
class MonsterCreator {
    name;
    damageMonster;
    lifePointsMonster;
    dodgeChanceBase;
    attackChanceBase;
    weakness;
    bodyParts;
    statusBuildup;
    activeStatusEffects;
    constructor(name, damageMonster, lifePointsMonster, dodgeChanceBase, attackChanceBase, weakness, bodyParts) {
        this.name = name;
        this.damageMonster = damageMonster;
        this.lifePointsMonster = lifePointsMonster;
        this.dodgeChanceBase = dodgeChanceBase;
        this.attackChanceBase = attackChanceBase;
        this.weakness = weakness;
        this.bodyParts = bodyParts;
        this.statusBuildup = {
            Paralysis: 0,
            Poison: 0,
            Blast: 0
        };
        this.activeStatusEffects = {
            isParalyzed: false,
            paralysisTurnsLeft: 0,
            isPoisoned: false,
            poisonTurnsLeft: 0,
            poisonDamage: 50,
            isStunned: false,
            stunTurnsLeft: 0
        };
    }
    applyStatusTurn() {
        let canMove = true;
        if (this.activeStatusEffects.isPoisoned) {
            this.lifePointsMonster -= this.activeStatusEffects.poisonDamage;
            this.activeStatusEffects.poisonTurnsLeft--;
            console.log("Veneno Aplicado");
            console.log(`O monstro ${main_1.monster.name} tomou ${this.activeStatusEffects.poisonDamage} de dano por veneno`);
            if (this.activeStatusEffects.poisonTurnsLeft <= 0) {
                this.activeStatusEffects.isPoisoned = false;
                console.log(`O efeito do veneno passou`);
            }
        }
        if (this.activeStatusEffects.isParalyzed) {
            canMove = false;
            this.activeStatusEffects.paralysisTurnsLeft--;
            console.log(`O monstro ${main_1.monster.name} está totalmente paralisado e não pode atacar e nem desviar`);
            if (this.activeStatusEffects.paralysisTurnsLeft <= 0) {
                this.activeStatusEffects.isParalyzed = false;
                console.log(`O monstro ${main_1.monster.name} se recuperou da paralisia`);
            }
        }
        if (this.activeStatusEffects.isStunned) {
            canMove = false;
            this.activeStatusEffects.stunTurnsLeft--;
            console.log(`O ${main_1.monster.name} foi atordoado pelo Offset e perdeu o turno `);
            if (this.activeStatusEffects.stunTurnsLeft <= 0) {
                this.activeStatusEffects.isStunned = false;
                console.log(`O ${main_1.monster.name} se recuperou do stun`);
            }
        }
        return canMove;
    }
    async attackHunter(hunter) {
        await (0, Util_1.wait)(500);
        if (this.attackChanceBase > hunter.dodgeChanceBase) {
            if (hunter.hasOffsetSkil()) {
                console.log(` ${hunter.name} prepara o Offset`);
                await (0, Util_1.wait)(800);
                const OffsetRoll = (0, Util_1.getRandomValue)(0, 100);
                const offSetDifficulty = 30;
                if (OffsetRoll > offSetDifficulty) {
                    console.log(`Sucesso no Offset`);
                    console.log(`${hunter.name} bloqueou perfeitamente o ataque`);
                    this.activeStatusEffects.isStunned = true;
                    this.activeStatusEffects.stunTurnsLeft = 1;
                    return;
                }
                else {
                    (console.log(`Falha no offSet: ${OffsetRoll}%, o ataque irá acertar`));
                }
            }
            console.log(`O monstro atacará o caçador ${hunter.name}`);
            await (0, Util_1.wait)(1500);
            const damage = hunter.lifePointsHunter - this.damageMonster;
            const damageDealt = hunter.lifePointsHunter - damage;
            const lifeActualHunter = hunter.lifePointsHunter - damageDealt;
            hunter.lifePointsHunter = lifeActualHunter;
            console.log("\n");
            console.log(`O monstro ${this.name}, deu ${damageDealt} de dano ao caçador ${hunter.name}, agora ele tem ${lifeActualHunter} de vida restante`);
            await (0, Util_1.wait)(1500);
            if (hunter.lifePointsHunter <= 0) {
                console.log("\n");
                console.log(`Derrota, o monstro derrotou o caçador, o monstro ${this.name} resistiu com ${this.lifePointsMonster} de vida restante`);
                await (0, Util_1.wait)(1500);
            }
        }
        else {
            console.log("\n");
            console.log(`O caçador ${hunter.name} desviou com sucesso`);
        }
        await (0, Util_1.wait)(1500);
    }
}
exports.MonsterCreator = MonsterCreator;
//# sourceMappingURL=Monster.js.map