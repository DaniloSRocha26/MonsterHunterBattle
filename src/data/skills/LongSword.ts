import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const longswordMoves: Skill[] = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Spirit Slash",
        damageSkill: 50,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.2,
        nameSkill: "Spirit Gauge",
        damageSkill: 100,
        buffs: [
            {
                name: "Spirit Gauge Charge",
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
        nameSkill: "Iai Slash",
        damageSkill: 120,
        buffs: [
            {
                name: "Counter Stance",
                buffValue: 1.5,
                duration: 2,
                type: "damage",
            },
        ],
        action: attackMonster,
    },

    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.5,
        nameSkill: "Foresight Slash",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 5,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Savage Slash",
        damageSkill: 130,
        buffs: [
            {
                name: "Spirit Surge",
                buffValue: 1.3,
                duration: 3,
                type: "damage",
            },
        ],
        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack", "Buff", "Buff"],
        multiplier: 1.0,
        nameSkill: "Spirit Rush",
        damageSkill: 160,
        buffs: [
            {
                name: "Spirit Gauge Boost",
                buffValue: 1.4,
                duration: 2,
                type: "damage",
            },
            {
                name: "Counter Surge",
                buffValue: 1.25,
                duration: 2,
                type: "damage",
            },
        ],
        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Hissatsu",
        damageSkill: 180,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wide Slash",
        damageSkill: 70,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Somersault Slash",
        damageSkill: 110,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Iai Quick Draw",
        damageSkill: 90,
        action: attackMonster,
    },

]
