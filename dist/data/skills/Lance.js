"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gunLanceMoves = void 0;
const Combat_1 = require("../../Combat");
exports.gunLanceMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Mid Thrust",
        damageSkill: 150,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "High Thrust",
        damageSkill: 190,
        action: Combat_1.attackMonster,
    },
    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Triple Thrust",
        damageSkill: 340,
        action: Combat_1.attackMonster,
    },
    {
        id: 4,
        typeOfSkill: ["Defense"],
        multiplier: 1.0,
        nameSkill: "Guard",
        damageSkill: 0,
        action: Combat_1.attackMonster,
    },
    {
        id: 5,
        typeOfSkill: ["Attack", "Defense"],
        multiplier: 1.0,
        nameSkill: "Guard Dash",
        damageSkill: 120,
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack", "Defense"],
        multiplier: 1.0,
        nameSkill: "Shield Attack",
        damageSkill: 100,
        action: Combat_1.attackMonster,
    },
    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charge Counter",
        damageSkill: 350,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wide Sweep",
        damageSkill: 250,
        action: Combat_1.attackMonster,
    },
    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Dash Attac",
        damageSkill: 150,
        action: Combat_1.attackMonster,
    },
    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Finishing Thrust",
        damageSkill: 160,
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=Lance.js.map