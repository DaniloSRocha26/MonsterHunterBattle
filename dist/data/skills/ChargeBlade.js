"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chargeBladeMoves = void 0;
const Combat_1 = require("../../Combat");
exports.chargeBladeMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Sword Slash",
        damageSkill: 110,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack"],
        multiplier: 1.15,
        nameSkill: "Shield Thrust",
        damageSkill: 140,
        action: Combat_1.attackMonster,
    },
    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.2,
        nameSkill: "Charged Sword Slash",
        damageSkill: 190,
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
        multiplier: 1.1,
        nameSkill: "Guard Point",
        damageSkill: 120,
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.25,
        nameSkill: "Elemental Discharge I",
        damageSkill: 220,
        action: Combat_1.attackMonster,
    },
    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.3,
        nameSkill: "Elemental Discharge II",
        damageSkill: 260,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.4,
        nameSkill: "Axe Heavy Slam",
        damageSkill: 340,
        action: Combat_1.attackMonster,
    },
    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.6,
        nameSkill: "Super Amped Elemental Discharge",
        damageSkill: 480,
        action: Combat_1.attackMonster,
    },
    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.5,
        nameSkill: "Savage Axe Slash",
        damageSkill: 420,
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=ChargeBlade.js.map