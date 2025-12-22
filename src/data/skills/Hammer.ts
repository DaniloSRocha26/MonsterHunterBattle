
import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const greatSwordMoves: Skill[] = [
    {

        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Overhead Smash I",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.25,
        nameSkill: "Overhead Smash II",
        damageSkill: 190,

        action: attackMonster,
    },

    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Upswing",
        damageSkill: 250,


        action: attackMonster,
    },

    {
        id: 4,
        typeOfSkill: ["Offset"],
        multiplier: 1.0,
        nameSkill: "Offset Counter Attack",
        damageSkill: 250,
        action: attackMonster,
    },

    {
        id: 5,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Big Bang",
        damageSkill: 300,

        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Spinning Bludgeon",
        damageSkill: 350,

        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Spinning Side Smash",
        damageSkill: 200,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Mighty Charge",
        damageSkill: 400,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charged Side Blow",
        damageSkill: 350,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Charged Upswing",
        damageSkill: 300,
        action: attackMonster,
    },

]


