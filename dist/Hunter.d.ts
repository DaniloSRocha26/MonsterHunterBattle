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
    potions: number;
    potionHealAmount: number;
    constructor(name: string, weapon: Weapon, damageWeapon: Weapon, lifePointsHunter: number, armor: number, dodgeChanceBase: number, attackChanceBase: number, maxLifePoints: number);
    nextTurn(): void;
    usePotion(): void;
    hasOffsetSkil(): boolean;
    attackMonster(monster: MonsterCreator): Promise<void>;
}
//# sourceMappingURL=Hunter.d.ts.map