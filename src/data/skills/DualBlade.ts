import { HunterCreator } from "../../Hunter";
import { typeOfSkill, Weapon } from "../../interface/Moves";
import { MonsterCreator } from "../../Monster";

const attackMonster = (baseDamage: number, damageSkill: number, hunter: HunterCreator, monster: MonsterCreator) => {
    let multiplier = 1

    hunter.activeBuffs.forEach((buff) => {

        if (buff.type === "damage") {
            multiplier = multiplier * buff.buffValue
        }

    })

    hunter.activeBuffs.forEach((buff) => {
        if (buff.type === "lifesteal") {
            const healing = buff.buffValue

            const newLife = hunter.lifePointsHunter + healing

            if (newLife > hunter.maxLifePoints) {
                hunter.lifePointsHunter = hunter.maxLifePoints
                console.log("A vida já está no máximo")

            } else {
                hunter.lifePointsHunter = newLife
                console.log(`Curou ${buff.buffValue} de vida`)
            }
        }

    })

    const rawDamage = (baseDamage + damageSkill) * multiplier
    const finalDamage = Math.floor(rawDamage)
    const newLifeMonster = monster.lifePointsMonster - finalDamage

    monster.lifePointsMonster = newLifeMonster

    console.log(`${monster.name} recebeu ${finalDamage} de dano e está com ${monster.lifePointsMonster} pontos de vida`)


}



export const dualblades: Weapon = {
    name: "Dual Blades",
    type: "Dual Blades",
    baseDamage: 40,
    skills: [{
        id: 1,
        typeOfSkill: ["Attack"],
        multiplier: 1.00,
        nameSkill: "Double Slash",
        damageSkill: 40,
        action: attackMonster
    }, {
        id: 2,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.25,
        nameSkill: "Demon Mode",
        damageSkill: 200,

        buff: {
            name: "Demon Mode",
            buffValue: 1.25,
            duration: 3,
            type: "damage"
        },

        action: attackMonster,

    }, {
        id: 3,
        typeOfSkill: ["Attack", "Buff"],
        multiplier: 1.00,
        nameSkill: "Arcdemon Mode",
        damageSkill: 100,

        buff: {
            name: "LifeSteal",
            buffValue: 20,
            duration: 2,
            type: "lifesteal"
        },
        action: attackMonster
    }]

}