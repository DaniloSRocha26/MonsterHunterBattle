"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greatSwordMoves = void 0;
const Combat_1 = require("../../Combat");
exports.greatSwordMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Fire",
        damageSkill: 100,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.25,
        nameSkill: "Rapid Fire Mode",
        damageSkill: 190,
        action: Combat_1.attackMonster,
    },
    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Fire II",
        damageSkill: 120,
        buffs: [
            {
                name: "LifeSteal",
                buffValue: 1.25,
                duration: 3,
                type: "lifesteal",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Chaser Shot",
        damageSkill: 220,
        action: Combat_1.attackMonster,
    },
    {
        id: 5,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Burst Step",
        damageSkill: 270,
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wyvernblast",
        damageSkill: 300,
        action: Combat_1.attackMonster,
    },
    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Adhesive Ammo Shot",
        damageSkill: 200,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Spread Shot",
        damageSkill: 350,
        action: Combat_1.attackMonster,
    },
    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Rapid Fire Elemental Shot",
        damageSkill: 350,
        action: Combat_1.attackMonster,
    },
    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Sticky Detonation",
        damageSkill: 300,
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=LightBowgun.js.map