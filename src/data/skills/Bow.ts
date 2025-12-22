
import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const bowMoves: Skill[] = [
    {

        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charge Shot",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.25,
        nameSkill: "Power Coating",
        damageSkill: 60,

        buffs: [
            {
                name: "Power",
                buffValue: 1.50,
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
        nameSkill: "Power II",
        damageSkill: 100,

        buffs: [
            {
                name: "Power II",
                buffValue: 3.0,
                duration: 2,
                type: "damage",
            },
        ],
        action: attackMonster,
    },

    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Dragon Piercer",
        damageSkill: 350,
        action: attackMonster,
    },

    {
        id: 5,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.0,
        nameSkill: "Thousand Dragons",
        damageSkill: 400,

        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Hailstorm",
        damageSkill: 190,

        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Quick Shot",
        damageSkill: 100,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charging Sidestep",
        damageSkill: 120,
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
        nameSkill: "Flying Swallow Shot",
        damageSkill: 140,
        action: attackMonster,
    },

]


