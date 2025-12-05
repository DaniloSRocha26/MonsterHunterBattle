import { Weapon } from "./interface/Moves";
import { Buff } from "./interface/Moves";
import { MonsterCreator } from "./Monster";
export declare class HunterCreator {
    private id;
    name: string;
    weapon: Weapon;
    damageWeapon: Weapon;
    lifePointsHunter: number;
    armor: number;
    dodgeChanceBase: number;
    attackChanceBase: number;
    activeBuffs: Buff[];
    maxLifePoints: number;
    lifestealEffect: {
        lifesteal: number;
        duration: number;
    } | null;
    constructor(name: string, weapon: Weapon, damageWeapon: Weapon, lifePointsHunter: number, armor: number, dodgeChanceBase: number, attackChanceBase: number, maxLifePoints: number);
    nextTurn(): void;
    attackMonster(monster: MonsterCreator): void;
}
//# sourceMappingURL=Hunter.d.ts.map