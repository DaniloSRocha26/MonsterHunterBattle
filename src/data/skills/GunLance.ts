
import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const gunLanceMoves: Skill[] = [
    {

        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Lateral Thrust I",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack"],
        multiplier: 1.25,
        nameSkill: "Lateral Thrust II",
        damageSkill: 190,

        action: attackMonster,
    },

    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wide Sweep",
        damageSkill: 140,


        action: attackMonster,
    },

    {
        id: 4,
        typeOfSkill: ["Defense"],
        multiplier: 1.0,
        nameSkill: "Guard",
        damageSkill: 0,
        action: attackMonster,
    },

    {
        id: 5,
        typeOfSkill: ["Attack", "Defense"],
        multiplier: 1.0,
        nameSkill: "Guard Thrust",
        damageSkill: 120,

        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wyrmstake Cannon",
        damageSkill: 300,

        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Multi Wyrmstake Full Blast",
        damageSkill: 500,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wyvern’s Fire",
        damageSkill: 650,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Rising Slash",
        damageSkill: 120,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Shelling",
        damageSkill: 100,
        action: attackMonster,
    },

]


