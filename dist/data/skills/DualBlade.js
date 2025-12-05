"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dualblades = void 0;
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
    console.log(`${monster.name} recebeu ${finalDamage} de dano e está com ${monster.lifePointsMonster} pontos de vida`);
};
exports.dualblades = {
    name: "Iron Dual Blades",
    type: "Dual Blades",
    baseDamage: 40,
    element: "Fire",
    skills: [
        {
            id: 1,
            typeOfSkill: ["Attack"],
            multiplier: 1.0,
            nameSkill: "Double Slash",
            damageSkill: 40,
            action: attackMonster,
        },
        {
            id: 2,
            typeOfSkill: ["Attack", "Buff"],
            multiplier: 1.25,
            nameSkill: "Demon Mode",
            damageSkill: 200,
            buffs: [
                {
                    name: "Demon Mode",
                    buffValue: 1.25,
                    duration: 3,
                    type: "damage",
                },
            ],
            action: attackMonster,
        },
        {
            id: 3,
            typeOfSkill: ["Attack", "Buff"],
            multiplier: 1.0,
            nameSkill: "Arcdemon Mode",
            damageSkill: 100,
            buffs: [
                {
                    name: "LifeSteal",
                    buffValue: 20,
                    duration: 2,
                    type: "lifesteal",
                },
            ],
            action: attackMonster,
        },
        {
            id: 4,
            typeOfSkill: ["Attack"],
            multiplier: 1.0,
            nameSkill: "Blade Dance",
            damageSkill: 300,
            action: attackMonster,
        },
        {
            id: 5,
            typeOfSkill: ["Attack", "Buff"],
            multiplier: 1.0,
            nameSkill: "Demon Flurry",
            damageSkill: 140,
            buffs: [
                {
                    name: "LifeSteal+",
                    buffValue: 30,
                    duration: 2,
                    type: "lifesteal",
                },
            ],
            action: attackMonster,
        },
        {
            id: 6,
            typeOfSkill: ["Attack", "Buff", "Buff"],
            multiplier: 1.0,
            nameSkill: "Demon Flurry Rush",
            damageSkill: 300,
            buffs: [
                {
                    name: "Demon Mode+",
                    buffValue: 1.2,
                    duration: 2,
                    type: "damage",
                },
                {
                    name: "LifeSteal+",
                    buffValue: 30,
                    duration: 2,
                    type: "lifesteal",
                },
            ],
            action: attackMonster,
        },
        {
            id: 7,
            typeOfSkill: ["Attack"],
            multiplier: 1.0,
            nameSkill: "Rising Slash",
            damageSkill: 150,
            action: attackMonster,
        },
        {
            id: 8,
            typeOfSkill: ["Attack"],
            multiplier: 1.0,
            nameSkill: "Fade Slash",
            damageSkill: 170,
            action: attackMonster,
        },
        {
            id: 9,
            typeOfSkill: ["Attack"],
            multiplier: 1.0,
            nameSkill: "Roundslash",
            damageSkill: 110,
            action: attackMonster,
        },
        {
            id: 10,
            typeOfSkill: ["Attack"],
            multiplier: 1.0,
            nameSkill: "Spinning Slash",
            damageSkill: 140,
            action: attackMonster,
        },
    ],
};
//# sourceMappingURL=DualBlade.js.map