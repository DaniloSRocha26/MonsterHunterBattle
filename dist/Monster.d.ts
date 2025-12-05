export declare class MonsterCreator {
    name: string;
    damageMonster: number;
    lifePointsMonster: number;
    dodgeChanceBase: number;
    attackChanceBase: number;
    constructor(name: string, damageMonster: number, lifePointsMonster: number, dodgeChanceBase: number, attackChanceBase: number);
    rollDodgeChance(): void;
    attackHunter(hunter: {
        lifePointsHunter: number;
        dodgeChanceBase: number;
        name: string;
    }): void;
}
//# sourceMappingURL=Monster.d.ts.map