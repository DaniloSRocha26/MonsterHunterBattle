"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gunLanceMoves = void 0;
const Combat_1 = require("../../Combat");
exports.gunLanceMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Lateral Thrust I",
        damageSkill: 150,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack"],
        multiplier: 1.25,
        nameSkill: "Lateral Thrust II",
        damageSkill: 190,
        action: Combat_1.attackMonster,
    },
    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wide Sweep",
        damageSkill: 140,
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
        nameSkill: "Guard Thrust",
        damageSkill: 120,
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wyrmstake Cannon",
        damageSkill: 300,
        action: Combat_1.attackMonster,
    },
    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Multi Wyrmstake Full Blast",
        damageSkill: 500,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wyvern’s Fire",
        damageSkill: 650,
        action: Combat_1.attackMonster,
    },
    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Rising Slash",
        damageSkill: 120,
        action: Combat_1.attackMonster,
    },
    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Shelling",
        damageSkill: 100,
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=GunLance.js.map