import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const heavyBowGunMoves: Skill[] = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Normal Shot",
        damageSkill: 80,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.15,
        nameSkill: "Rapid Fire Mode",
        damageSkill: 120,
        action: attackMonster,
    },

    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Piercing Shot",
        damageSkill: 110,

        buffs: [
            {
                name: "LifeSteal",
                buffValue: 1.15,
                duration: 3,
                type: "lifesteal",
            },
        ],

        action: attackMonster,
    },

    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.1,
        nameSkill: "Focused Shot",
        damageSkill: 180,
        action: attackMonster,
    },

    {
        id: 5,
        typeOfSkill: ["Attack"],
        multiplier: 1.2,
        nameSkill: "Power Shot",
        damageSkill: 210,
        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.4,
        nameSkill: "Wyvernheart",
        damageSkill: 350,
        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.25,
        nameSkill: "Sticky Ammo Shot",
        damageSkill: 200,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.3,
        nameSkill: "Spread Ammo Shot",
        damageSkill: 260,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.2,
        nameSkill: "Elemental Rapid Shot",
        damageSkill: 190,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.35,
        nameSkill: "Sticky Ammo Detonation",
        damageSkill: 300,
        action: attackMonster,
    },
]
