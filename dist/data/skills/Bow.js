"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bowMoves = void 0;
const Combat_1 = require("../../Combat");
exports.bowMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charge Shot",
        damageSkill: 150,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.25,
        nameSkill: "Power Coating",
        damageSkill: 60,
        buffs: [
            {
                name: "Power",
                buffValue: 1.50,
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
        nameSkill: "Power II",
        damageSkill: 100,
        buffs: [
            {
                name: "Power II",
                buffValue: 3.0,
                duration: 2,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Dragon Piercer",
        damageSkill: 350,
        action: Combat_1.attackMonster,
    },
    {
        id: 5,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Thousand Dragons",
        damageSkill: 400,
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Hailstorm",
        damageSkill: 190,
        action: Combat_1.attackMonster,
    },
    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Quick Shot",
        damageSkill: 100,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charging Sidestep",
        damageSkill: 120,
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
        nameSkill: "Flying Swallow Shot",
        damageSkill: 140,
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=Bow.js.map