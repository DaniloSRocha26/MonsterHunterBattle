
import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const gunLanceMoves: Skill[] = [
    {

        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Mid Thrust",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "High Thrust",
        damageSkill: 190,

        action: attackMonster,
    },

    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Triple Thrust",
        damageSkill: 340,


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
        nameSkill: "Guard Dash",
        damageSkill: 120,

        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack", "Defense"],
        multiplier: 1.0,
        nameSkill: "Shield Attack",
        damageSkill: 100,

        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charge Counter",
        damageSkill: 350,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Wide Sweep",
        damageSkill: 250,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Dash Attack",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Finishing Thrust",
        damageSkill: 160,
        action: attackMonster,
    },

]


