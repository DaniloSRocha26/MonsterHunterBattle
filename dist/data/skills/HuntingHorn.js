"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.huntinghornMoves = void 0;
const Combat_1 = require("../../Combat");
exports.huntinghornMoves = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Sound Slash",
        damageSkill: 50,
        action: Combat_1.attackMonster,
    },
    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.2,
        nameSkill: "Melodic Charge",
        damageSkill: 70,
        buffs: [
            {
                name: "Attack Up",
                buffValue: 1.2,
                duration: 5,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Power Chorus",
        damageSkill: 100,
        action: Combat_1.attackMonster,
    },
    {
        id: 4,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.3,
        nameSkill: "Healing Melody",
        damageSkill: 90,
        action: Combat_1.attackMonster,
    },
    {
        id: 5,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.5,
        nameSkill: "Echoing Strike",
        damageSkill: 120,
        buffs: [
            {
                name: "Elemental Up",
                buffValue: 1.2,
                duration: 4,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
    {
        id: 6,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Grand Sonata",
        damageSkill: 150,
        buffs: [
            {
                name: "Attack Up+",
                buffValue: 1.3,
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
        nameSkill: "Resonance Strike",
        damageSkill: 130,
        action: Combat_1.attackMonster,
    },
    {
        id: 8,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Blast Hymn",
        damageSkill: 110,
        action: Combat_1.attackMonster,
    },
    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Melody Wave",
        damageSkill: 80,
        action: Combat_1.attackMonster,
    },
    {
        id: 10,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Harmonic Vibe",
        damageSkill: 100,
        buffs: [
            {
                name: "Critical Up",
                buffValue: 1.2,
                duration: 4,
                type: "damage",
            },
        ],
        action: Combat_1.attackMonster,
    },
];
//# sourceMappingURL=HuntingHorn.js.map