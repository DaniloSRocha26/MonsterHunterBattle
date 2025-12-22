
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
        typeOfSkill: ["Attack"],
        multiplier: 1.25,
        nameSkill: "Wide Slash",
        damageSkill: 190,

        action: attackMonster,
    },

    {
        id: 3,
        typeOfSkill: ["Attack"],
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
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Side Blow",
        damageSkill: 120,

        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Turning Slash",
        damageSkill: 400,

        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Sweeping Slash",
        damageSkill: 200,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Backstep Slash",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charged Draw Slash",
        damageSkill: 350,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Overdrive Slash",
        damageSkill: 290,
        action: attackMonster,
    },

]


