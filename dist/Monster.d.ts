export declare class MonsterCreator {
    name: string;
    damageMonster: number;
    lifePointsMonster: number;
    dodgeChanceBase: number;
    attackChanceBase: number;
    weakness: {
        Fire?: number;
        Ice?: number;
        Thunder?: number;
        Water?: number;
        Dragon?: number;
    };
    constructor(name: string, damageMonster: number, lifePointsMonster: number, dodgeChanceBase: number, attackChanceBase: number, weakness: {
        Fire?: number;
        Ice?: number;
        Thunder?: number;
        Water?: number;
        Dragon?: number;
    });
    rollDodgeChance(): void;
    attackHunter(hunter: {
        lifePointsHunter: number;
        dodgeChanceBase: number;
        name: string;
    }): Promise<void>;
}
//# sourceMappingURL=Monster.d.ts.map