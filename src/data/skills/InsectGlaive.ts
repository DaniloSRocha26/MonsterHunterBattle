import { attackMonster } from "../../Combat"
import { Skill } from "../../interface/Moves";

export const insectGlaiveMoves: Skill[] = [
    {
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.0,
        nameSkill: "Forward Slash",
        damageSkill: 120,
        action: attackMonster,
    },

    {
        id: 2,
        typeOfSkill: ["Attack"],
        multiplier: 1.1,
        nameSkill: "Rising Slash",
        damageSkill: 150,
        action: attackMonster,
    },

    {
        id: 3,
        typeOfSkill: ["Attack"],
        multiplier: 1.15,
        nameSkill: "Wide Sweep",
        damageSkill: 180,
        action: attackMonster,
    },

    {
        id: 4,
        typeOfSkill: ["Attack"],
        multiplier: 1.2,
        nameSkill: "Vault Strike",
        damageSkill: 140,
        action: attackMonster,
    },

    {
        id: 5,
        typeOfSkill: ["Attack"],
        multiplier: 1.25,
        nameSkill: "Aerial Slash",
        damageSkill: 220,
        action: attackMonster,
    },

    {
        id: 6,
        typeOfSkill: ["Attack"],
        multiplier: 1.3,
        nameSkill: "Midair Combo",
        damageSkill: 260,
        action: attackMonster,
    },

    {
        id: 7,
        typeOfSkill: ["Attack"],
        multiplier: 1.35,
        nameSkill: "Tornado Slash",
        damageSkill: 280,
        action: attackMonster,
    },

    {
        id: 8,
        typeOfSkill: ["Attack"],
        multiplier: 1.4,
        nameSkill: "Descending Thrust",
        damageSkill: 320,
        action: attackMonster,
    },

    {
        id: 9,
        typeOfSkill: ["Attack"],
        multiplier: 1.45,
        nameSkill: "Diving Wyvern",
        damageSkill: 380,
        action: attackMonster,
    },

    {
        id: 10,
        typeOfSkill: ["Attack"],
        multiplier: 1.5,
        nameSkill: "Aerial Finisher",
        damageSkill: 420,
        action: attackMonster,
    },
]
