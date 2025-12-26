"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchaxeMoves = void 0;
const Combat_1 = require("../../Combat");
exports.switchaxeMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Axe Slash",
        damageSkill: 60,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.2,
        nameSkill: "Sword Mode",
        damageSkill: 120,
        buffs: [
            {
                name: "Sword Mode Charge",
                buffValue: 1.3,
                duration: 5,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 3,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Amped Element Slash",
        damageSkill: 180,
        buffs: [
            {
                name: "Element Boost",
                buffValue: 1.5,
                duration: 4,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.4,
        nameSkill: "Switch Burst",
        damageSkill: 140,
        action: Combat_1.attackMonster,
    },
    {
        id: 5,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.3,
        nameSkill: "Charged Element Burst",
        damageSkill: 200,
        buffs: [
            {
                name: "Elemental Charge",
                buffValue: 1.5,
                duration: 3,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Morph Slash",
        damageSkill: 80,
        buffs: [
            {
                name: "Axe Mode Charge",
                buffValue: 1.2,
                duration: 5,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Elemental Discharge",
        damageSkill: 150,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Overcharge",
        damageSkill: 160,
        action: Combat_1.attackMonster,
    },
    {
        id: 9,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Element Burst",
        damageSkill: 110,
        buffs: [
            {
                name: "Element Charge",
                buffValue: 1.4,
                duration: 3,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 10,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Switch Axe Transform",
        damageSkill: 100,
        buffs: [
            {
                name: "Axe Mode",
                buffValue: 1.2,
                duration: 2,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=SwitchAxe.js.map