"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dualbladesMoves = void 0;
const Combat_1 = require("../../Combat");
exports.dualbladesMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Double Slash",
        damageSkill: 40,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.25,
        nameSkill: "Demon Mode",
        damageSkill: 120,
        buffs: [
            {
                name: "Demon Mode",
                buffValue: 1.25,
                duration: 3,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
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
        action: Combat_1.attackMonster,
    },
    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Blade Dance",
        damageSkill: 170,
        action: Combat_1.attackMonster,
    },
    {
        id: 5,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Demon Flurry",
        damageSkill: 120,
        buffs: [
            {
                name: "LifeSteal+",
                buffValue: 30,
                duration: 2,
                type: "lifesteal",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack", "Buff", "Buff"],
        multiplier: 1.0,
        nameSkill: "Demon Flurry Rush",
        damageSkill: 190,
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
        action: Combat_1.attackMonster,
    },
    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Rising Slash",
        damageSkill: 150,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Fade Slash",
        damageSkill: 70,
        action: Combat_1.attackMonster,
    },
    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Roundslash",
        damageSkill: 110,
        action: Combat_1.attackMonster,
    },
    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Spinning Slash",
        damageSkill: 120,
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=DualBlade.js.map