import { Weapon, Elementype, statusType } from "../interface/Moves";
import { dualbladesMoves } from "../data/skills/DualBlade";

export function createDualBlade(
    name: string,
    element: string | undefined,
    statusType: string | undefined
): Weapon {
    return {
        name: name,
        type: "Dual Blades",
        baseDamage: 40,

        skills: dualbladesMoves,

        element: element as Elementype | undefined,

        statusEffect: statusType ? { type: statusType as statusType, buildupPerHit: 20 } : undefined
    }
}