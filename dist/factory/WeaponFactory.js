"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDualBlade = createDualBlade;
const DualBlade_1 = require("../data/skills/DualBlade");
function createDualBlade(name, element, statusType) {
    return {
        name: name,
        type: "Dual Blades",
        baseDamage: 40,
        skills: DualBlade_1.dualbladesMoves,
        element: element,
        statusEffect: statusType ? { type: statusType, buildupPerHit: 20 } : undefined
    };
}
//# sourceMappingURL=WeaponFactory.js.map