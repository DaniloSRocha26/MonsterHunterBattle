"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterCreator = void 0;
class MonsterCreator {
    name;
    damageMonster;
    lifePointsMonster;
    dodgeChanceBase;
    attackChanceBase;
    constructor(name, damageMonster, lifePointsMonster, dodgeChanceBase, attackChanceBase) {
        this.name = name;
        this.damageMonster = damageMonster;
        this.lifePointsMonster = lifePointsMonster;
        this.dodgeChanceBase = dodgeChanceBase;
        this.attackChanceBase = attackChanceBase;
    }
    rollDodgeChance() { }
    attackHunter(hunter) {
        if (this.attackChanceBase > hunter.dodgeChanceBase) {
            const damage = hunter.lifePointsHunter - this.damageMonster;
            const damageDealt = hunter.lifePointsHunter - damage;
            const lifeActualHunter = hunter.lifePointsHunter - damageDealt;
            hunter.lifePointsHunter = lifeActualHunter;
            console.log(`O monstro ${this.name}, deu ${damageDealt} de dano ao caçador ${hunter.name}, agora ele tem ${lifeActualHunter} de vida restante`);
            if (hunter.lifePointsHunter <= 0) {
                console.log(`Derrota, o monstro derrotou o caçador, o monstro ${this.name} resistiu com ${this.lifePointsMonster} de vida restante`);
            }
        }
        else {
            console.log(`O caçador ${hunter.name} desviou com sucesso`);
        }
    }
}
exports.MonsterCreator = MonsterCreator;
//# sourceMappingURL=Monster.js.map