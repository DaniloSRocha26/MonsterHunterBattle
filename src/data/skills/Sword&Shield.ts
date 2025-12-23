
import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const gunLanceMoves: Skill[] = [
    {

        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Lateral Slash",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Diagonal Rising Slash",
        damageSkill: 170,

        action: attackMonster,
    },

    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Advancing Slash",
        damageSkill: 200,


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
        nameSkill: "Shield Attack",
        damageSkill: 140,

        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack", "Defense"],
        multiplier: 1.0,
        nameSkill: "Sliding Swipe",
        damageSkill: 100,

        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Perfect Rush",
        damageSkill: 200,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Jumping Slash",
        damageSkill: 250,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Roundslash",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Advancing Slash",
        damageSkill: 160,
        action: attackMonster,
    },

]


