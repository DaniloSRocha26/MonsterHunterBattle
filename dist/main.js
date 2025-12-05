"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monster = exports.hunter = void 0;
const Util_1 = require("./Util");
const Util_2 = require("./Util");
const Hunter_1 = require("./Hunter");
const Monster_1 = require("./Monster");
const DualBlade_1 = require("./data/skills/DualBlade");
exports.hunter = new Hunter_1.HunterCreator("Danilo", DualBlade_1.dualblades, DualBlade_1.dualblades, 100, 20, 50, 0, 100);
exports.monster = new Monster_1.MonsterCreator("Arkveld", 20, 5000, 30, 30, {
    Fire: 1.05,
    Ice: 1.1,
    Thunder: 1.2,
    Water: 1.1,
    Dragon: 1.25,
});
async function startBattle() {
    await (0, Util_2.wait)(1500);
    while (exports.monster.lifePointsMonster > 0 && exports.hunter.lifePointsHunter > 0) {
        console.log("\n-----INÍCIO DO TURNO-----");
        await (0, Util_2.wait)(1500);
        exports.hunter.nextTurn();
        await (0, Util_2.wait)(1500);
        const valueRandomHunterAttack = (0, Util_1.getRandomValue)(40, 100);
        const valueRandomHunterDodge = (0, Util_1.getRandomValue)(40, 100);
        const valueRandomMonsterAttack = (0, Util_1.getRandomValue)(0, 100);
        const valueRandomMonsterDodge = (0, Util_1.getRandomValue)(0, 70);
        exports.hunter.dodgeChanceBase = valueRandomHunterDodge;
        exports.hunter.attackChanceBase = valueRandomHunterAttack;
        exports.monster.dodgeChanceBase = valueRandomMonsterDodge;
        exports.monster.attackChanceBase = valueRandomMonsterAttack;
        if (exports.monster.lifePointsMonster > 0 && exports.hunter.lifePointsHunter > 0) {
            console.log("\n");
            console.log(`O caçador ${exports.hunter.name} tem ${exports.hunter.dodgeChanceBase}% de chance de desviar e o ${exports.monster.name} tem ${exports.monster.attackChanceBase}% de chance de acertar o ataque `);
            await (0, Util_2.wait)(1500);
            exports.monster.attackHunter(exports.hunter);
            if (exports.hunter.lifePointsHunter <= 50 && exports.hunter.potions > 0) {
                exports.hunter.usePotion();
            }
            await (0, Util_2.wait)(1500);
            if (exports.hunter.lifePointsHunter > 0) {
                await (0, Util_2.wait)(1500);
                console.log("\n");
                console.log(`O monstro ${exports.monster.name} tem ${exports.monster.dodgeChanceBase}% de chance de desviar e o ${exports.hunter.name} tem ${exports.hunter.attackChanceBase}% de chance de acertar o atacar`);
                await (0, Util_2.wait)(1500);
                exports.hunter.attackMonster(exports.monster);
            }
            else {
                break;
            }
        }
        await (0, Util_2.wait)(3000);
    }
}
startBattle();
//# sourceMappingURL=main.js.map