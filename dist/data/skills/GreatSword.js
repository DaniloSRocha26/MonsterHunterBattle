"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greatSwordMoves = void 0;
const Combat_1 = require("../../Combat");
exports.greatSwordMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Overhead Slash",
        damageSkill: 150,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack"],
        multiplier: 1.25,
        nameSkill: "Wide Slash",
        damageSkill: 190,
        action: Combat_1.attackMonster,
    },
    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Rising Slash",
        damageSkill: 250,
        action: Combat_1.attackMonster,
    },
    {
        id: 4,
        typeOfSkill: ["Offset"],
        multiplier: 1.0,
        nameSkill: "Offset Rising Slash",
        damageSkill: 250,
        action: Combat_1.attackMonster,
    },
    {
        id: 5,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Side Blow",
        damageSkill: 120,
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Turning Slash",
        damageSkill: 400,
        action: Combat_1.attackMonster,
    },
    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Sweeping Slash",
        damageSkill: 200,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Backstep Slash",
        damageSkill: 150,
        action: Combat_1.attackMonster,
    },
    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charged Draw Slash",
        damageSkill: 350,
        action: Combat_1.attackMonster,
    },
    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Overdrive Slash",
        damageSkill: 290,
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=GreatSword.js.map