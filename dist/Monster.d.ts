import { BodyPart } from "./interface/Moves";
import { HunterCreator } from "./Hunter";
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
        isStunned: boolean;
        stunTurnsLeft: number;
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
    attackHunter(hunter: HunterCreator): Promise<void>;
}
//# sourceMappingURL=Monster.d.ts.map