import { HunterCreator } from "../Hunter";
import { MonsterCreator } from "../Monster";
export type Elementype = "Fire" | "Ice" | "Thunder" | "Water" | "Dragon";
export type statusType = "Paralysis" | "Poison" | "Blast";
export type BodyPart = {
    name: string;
    damageMultiplier: number;
    damageTaken?: number;
    breakThreshold?: number;
    broken?: boolean;
};
type WeaponType = "Great Sword" | "Sword & Shield" | "Dual Blades" | "Long Sword" | "Hunting Horn " | "Lance" | "Gunlance" | "Hammer" | "Switch Axe" | "Charge Blade" | "Insect Glaive" | "Bow" | "Light Bowgun" | "Heavy Bowgun ";
export declare const weaponType: WeaponType[];
type TypeOfSkill = "Attack" | "Defense" | "Buff" | "Offset";
export declare const typeOfSkill: TypeOfSkill[];
export interface Skill {
    id: number;
    nameSkill: string;
    damageSkill: number;
    typeOfSkill: TypeOfSkill[];
    multiplier: number;
    buffs?: Buff[];
    action: (baseDamage: number, damageSkill: number, hunter: HunterCreator, monster: MonsterCreator, weapon: Weapon) => void;
}
export interface Buff {
    name: string;
    buffValue: number;
    duration: number;
    type?: "damage" | "lifesteal";
}
export interface Weapon {
    name: string;
    type: WeaponType;
    baseDamage: number;
    skills: Skill[];
    element?: Elementype | undefined;
    statusEffect?: {
        type: statusType;
        buildupPerHit: number;
    } | undefined;
}
export {};
//# sourceMappingURL=Moves.d.ts.map