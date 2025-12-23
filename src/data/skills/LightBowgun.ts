
import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const greatSwordMoves: Skill[] = [
    {

        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Fire",
        damageSkill: 100,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.25,
        nameSkill: "Rapid Fire Mode",
        damageSkill: 190,

        action: attackMonster,
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

        action: attackMonster,
    },

    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Chaser Shot",
        damageSkill: 220,
        action: attackMonster,
    },

    {
        id: 5,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Burst Step",
        damageSkill: 270,

        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wyvernblast",
        damageSkill: 300,

        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Adhesive Ammo Shot",
        damageSkill: 200,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Spread Shot",
        damageSkill: 350,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Rapid Fire Elemental Shot",
        damageSkill: 350,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Sticky Detonation",
        damageSkill: 300,
        action: attackMonster,
    },

]


