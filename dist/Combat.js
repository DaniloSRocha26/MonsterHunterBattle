"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attackMonster = void 0;
const Util_1 = require("./Util");
const attackMonster = (baseDamage, damageSkill, hunter, monster, weapon) => {
    let multiplier = 1;
    hunter.activeBuffs.forEach((buff) => {
        if (buff.type === "damage") {
            multiplier = multiplier * buff.buffValue;
        }
    });
    hunter.activeBuffs.forEach((buff) => {
        if (buff.type === "lifesteal") {
            const healing = buff.buffValue;
            const newLife = hunter.lifePointsHunter + healing;
            if (newLife > hunter.maxLifePoints) {
                hunter.lifePointsHunter = hunter.maxLifePoints;
                console.log("A vida já está no máximo");
            }
            else {
                hunter.lifePointsHunter = newLife;
                console.log(`Curou ${buff.buffValue} de vida`);
            }
        }
    });
    const rawDamage = (baseDamage + damageSkill) * multiplier;
    let finalDamage = Math.floor(rawDamage);
    const keys = Object.keys(monster.bodyParts);
    const monsterRandomPart = (0, Util_1.getRandomValue)(0, keys.length - 1);
    const randomPartName = keys[monsterRandomPart];
    const monsterTargetPart = monster.bodyParts[randomPartName];
    const partMultiplier = monsterTargetPart?.damageMultiplier ?? 1;
    finalDamage = Math.floor(finalDamage * partMultiplier);
    if (weapon.element) {
        const elementMultiplier = monster.weakness[weapon.element] ?? 1.0;
        finalDamage = Math.floor(finalDamage * elementMultiplier);
        if (elementMultiplier > 1.0) {
            console.log("\n");
            console.log(`DANO ELEMENTAL EFETIVO (${weapon.element})`);
        }
        else if (elementMultiplier < 1.0) {
        }
    }
    const newLifeMonster = monster.lifePointsMonster - finalDamage;
    monster.lifePointsMonster = newLifeMonster;
    console.log("\n");
    console.log(`${monster.name} recebeu um golpe na parte [${monsterTargetPart?.name}] tomando ${finalDamage} de dano! (Vida restante: ${monster.lifePointsMonster})`);
    if (weapon.statusEffect) {
        const statusType = weapon.statusEffect.type;
        const buildAmount = weapon.statusEffect.buildupPerHit;
        monster.statusBuildup[statusType] += buildAmount;
        console.log(` Status [${statusType}]: ${monster.statusBuildup[statusType]}/1000`);
        if (monster.statusBuildup[statusType] >= 1000) {
            console.log(`Limite de Status atingido: ${statusType.toUpperCase}, o efeito será aplicado`);
            monster.statusBuildup[statusType] = 0;
            if (statusType === "Blast") {
                const blastDamage = 300;
                monster.lifePointsMonster -= blastDamage;
                console.log(`O efeito Blast explodiu, causando ${blastDamage} de dano`);
                console.log(`Vida restante do monstro = ${monster.lifePointsMonster}`);
            }
            else if (statusType === "Paralysis") {
                if (!monster.activeStatusEffects.isParalyzed) {
                    monster.activeStatusEffects.isParalyzed = true;
                    monster.activeStatusEffects.paralysisTurnsLeft = 2;
                    console.log(`O monstro entrou em estado de paralisia`);
                }
                else {
                    console.log(`O monstro já está paralisado`);
                }
            }
            else if (statusType === "Poison") {
                if (!monster.activeStatusEffects.isPoisoned) {
                    monster.activeStatusEffects.isPoisoned = true;
                    monster.activeStatusEffects.poisonTurnsLeft = 5;
                    console.log(`O monstro foi envenenado, ele perderá vida a cada turno`);
                }
                else {
                    monster.activeStatusEffects.poisonTurnsLeft = 5;
                    console.log(`A duração do veneno foi renovada`);
                }
            }
        }
    }
};
exports.attackMonster = attackMonster;
//# sourceMappingURL=Combat.js.map