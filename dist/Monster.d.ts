import { BodyPart } from "./interface/Moves";
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
    bodyParts: {
        [key: string]: BodyPart;
    };
    statusBuildup: {
        Paralysis: number;
        Poison: number;
        Blast: number;
    };
    activeStatusEffects: {
        isParalyzed: boolean;
        paralysisTurnsLeft: number;
        isPoisoned: boolean;
        poisonTurnsLeft: number;
        poisonDamage: number;
    };
    constructor(name: string, damageMonster: number, lifePointsMonster: number, dodgeChanceBase: number, attackChanceBase: number, weakness: {
        Fire?: number;
        Ice?: number;
        Thunder?: number;
        Water?: number;
        Dragon?: number;
    }, bodyParts: {
        [key: string]: BodyPart;
    });
    applyStatusTurn(): boolean;
    attackHunter(hunter: {
        lifePointsHunter: number;
        dodgeChanceBase: number;
        name: string;
    }): Promise<void>;
}
//# sourceMappingURL=Monster.d.ts.map