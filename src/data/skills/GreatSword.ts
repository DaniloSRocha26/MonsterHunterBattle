
import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const greatSwordMoves: Skill[] = [
    {

        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Overhead Slash",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.25,
        nameSkill: "Wide Slash",
        damageSkill: 190,

        action: attackMonster,
    },

    {
        id: 3,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Rising Slash",
        damageSkill: 250,


        action: attackMonster,
    },

    {
        id: 4,
        typeOfSkill: ["Offset"],
        multiplier: 1.0,
        nameSkill: "Offset Rising Slash",
        damageSkill: 250,
        action: attackMonster,
    },

    {
        id: 5,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Demon Flurry",
        damageSkill: 120,

        buffs: [
            {
                name: "LifeSteal+",
                buffValue: 30,
                duration: 2,
                type: "lifesteal",
            },
        ],

        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack", "Buff", "Buff"],
        multiplier: 1.0,
        nameSkill: "Demon Flurry Rush",
        damageSkill: 270,

        buffs: [
            {
                name: "Demon Mode+",
                buffValue: 1.2,
                duration: 2,
                type: "damage",
            },

            {
                name: "LifeSteal+",
                buffValue: 30,
                duration: 2,
                type: "lifesteal",
            },
        ],
        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Rising Slash",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Fade Slash",
        damageSkill: 170,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Roundslash",
        damageSkill: 110,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Spinning Slash",
        damageSkill: 140,
        action: attackMonster,
    },

]


