import { HunterCreator } from "../Hunter";
import { MonsterCreator } from "../Monster";
type Element = "Fire" | "Water" | "Thunder" | "Ice" | "Dragon" | false;
export declare const elements: Element[];
type WeaponType = "Great Sword" | "Sword & Shield" | "Dual Blades" | "Long Sword" | "Hunting Horn " | "Lance" | "Gunlance" | "Hammer" | "Switch Axe" | "Charge Blade" | "Insect Glaive" | "Bow" | "Light Bowgun" | "Heavy Bowgun ";
export declare const weaponType: WeaponType[];
type TypeOfSkill = "Attack" | "Defense" | "Buff";
export declare const typeOfSkill: TypeOfSkill[];
export interface Skill {
    id: number;
    nameSkill: string;
    damageSkill: number;
    typeOfSkill: TypeOfSkill[];
    multiplier: number;
    buff?: Buff;
    action: (baseDamage: number, damageSkill: number, hunter: HunterCreator, monster: MonsterCreator, buffToAply?: Buff) => void;
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
    element?: Element[];
    skills: Skill[];
}
export {};
//# sourceMappingURL=Moves.d.ts.map