
import { getRandomValue } from "./Util"
import { wait } from "./Util";
import { HunterCreator } from "./Hunter";
import { MonsterCreator } from "./Monster";
import { dualblades } from "./data/skills/DualBlade";

export const hunter = new HunterCreator(
    "Danilo",
    dualblades,
    dualblades,
    100,
    20,
    50,
    0,
    100
);
export const monster = new MonsterCreator("Arkveld", 20, 5000, 30, 30);

async function startBattle() {
    while (monster.lifePointsMonster > 0 && hunter.lifePointsHunter > 0) {


        console.log("\n-----INÍCIO DO TURNO-----")
        hunter.nextTurn()
        const valueRandomHunterAttack = getRandomValue(40, 100);
        const valueRandomHunterDodge = getRandomValue(40, 100);
        const valueRandomMonsterAttack = getRandomValue(40, 100);
        const valueRandomMonsterDodge = getRandomValue(40, 70);

        hunter.dodgeChanceBase = valueRandomHunterDodge;
        hunter.attackChanceBase = valueRandomHunterAttack;
        monster.dodgeChanceBase = valueRandomMonsterDodge;
        monster.attackChanceBase = valueRandomMonsterAttack;


        if (monster.lifePointsMonster > 0 && hunter.lifePointsHunter > 0) {
            console.log(
                `O caçador ${hunter.name} tem ${hunter.dodgeChanceBase}% de chance de desviar e o ${monster.name} tem ${monster.attackChanceBase}% de chance de acertar o ataque `
            );
            monster.attackHunter(hunter);
            if (hunter.lifePointsHunter > 0) {
                console.log(
                    `O monstro ${monster.name} tem ${monster.dodgeChanceBase}% de chance de desviar e o ${hunter.name} tem ${hunter.attackChanceBase}% de chance de acertar o atacar`
                );
                hunter.attackMonster(monster);
            } else {
                break
            }


        }

        await wait(3000);
    }
}

startBattle();
