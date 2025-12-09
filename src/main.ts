import { getRandomValue } from "./Util";
import { wait } from "./Util";
import { HunterCreator } from "./Hunter";
import { MonsterCreator } from "./Monster";
import { Arsenal } from "./data/Arsenal";
import { weaponType } from "./interface/Moves";





const randomTypeIndex = getRandomValue(0, weaponType.length - 1)
const selectedTypeName = weaponType[randomTypeIndex]?.trim()

console.log("Sorteando categoria de arma")
console.log(`Categoria Definida: [${selectedTypeName}]`)

const availableWeapons = Arsenal.filter(w => w.type.trim() === selectedTypeName)

let hunterWeapon

if (availableWeapons.length > 0) {
    console.log(`Encontradas ${availableWeapons.length} opções disponíveis.`)
    const specificIndex = getRandomValue(0, availableWeapons.length - 1)
    hunterWeapon = availableWeapons[specificIndex]
} else {
    console.log(`Nenhuma arma encontrada para o tipo: ${selectedTypeName}`)
    console.log(`Equipando uma arma de emergência para iniciar a batalha`)
    hunterWeapon = Arsenal[0]
}


console.log(`O Caçador equipou: ${hunterWeapon?.name}`)

export const hunter = new HunterCreator(
    "Danilo",
    hunterWeapon!,
    hunterWeapon!,
    100,
    20,
    50,
    0,
    100
);
export const monster = new MonsterCreator("Arkveld", 20, 5000, 30, 30, {
    Fire: 1.05,
    Ice: 1.1,
    Thunder: 1.2,
    Water: 1.1,
    Dragon: 1.25,
}, {
    head: {
        name: "Cabeça",
        damageMultiplier: 1.25
    },
    frontLeftLeg: {
        name: "Pata Dianteira Esquerda",
        damageMultiplier: 1.05
    },
    frontRightLeg: {
        name: "Pata Dianteira Direita",
        damageMultiplier: 1.05
    },
    backLeftLeg: {
        name: "Pata Traseira Esquerda",
        damageMultiplier: 1.05
    },
    backRightLeg: {
        name: "Pata Traseira Direita",
        damageMultiplier: 1.05
    },
    tail: {
        name: "Cauda",
        damageMultiplier: 1.15
    },
    body: {
        name: "Corpo",
        damageMultiplier: 1.0
    }
});


async function startBattle() {
    await wait(1500);

    while (monster.lifePointsMonster > 0 && hunter.lifePointsHunter > 0) {
        console.log("\n-----INÍCIO DO TURNO-----");

        await wait(1500);

        hunter.nextTurn();
        await wait(1500);

        const valueRandomHunterAttack = getRandomValue(40, 100);
        const valueRandomHunterDodge = getRandomValue(40, 100);
        const valueRandomMonsterAttack = getRandomValue(40, 100);
        const valueRandomMonsterDodge = getRandomValue(40, 70);

        hunter.dodgeChanceBase = valueRandomHunterDodge;
        hunter.attackChanceBase = valueRandomHunterAttack;
        monster.dodgeChanceBase = valueRandomMonsterDodge;
        monster.attackChanceBase = valueRandomMonsterAttack;

        if (monster.lifePointsMonster > 0 && hunter.lifePointsHunter > 0) {
            console.log("\n");
            console.log(
                `O caçador ${hunter.name} tem ${hunter.dodgeChanceBase}% de chance de desviar e o ${monster.name} tem ${monster.attackChanceBase}% de chance de acertar o ataque `
            );
            await wait(1500);

            const canMonsterMove = monster.applyStatusTurn()
            await wait(1000)

            if (canMonsterMove) {
                monster.attackHunter(hunter);
            }



            if (hunter.lifePointsHunter <= 50 && hunter.potions > 0) {
                hunter.usePotion();
            }
            await wait(1500);

            if (hunter.lifePointsHunter > 0) {
                await wait(1500);
                console.log("\n");
                console.log(
                    `O monstro ${monster.name} tem ${monster.dodgeChanceBase}% de chance de desviar e o ${hunter.name} tem ${hunter.attackChanceBase}% de chance de acertar o ataque`
                );
                await wait(1500);

                hunter.attackMonster(monster);
            } else {
                break;
            }
        }

        await wait(3000);
    }
}

startBattle();
