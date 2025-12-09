"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arsenal = void 0;
const WeaponFactory_1 = require("../factory/WeaponFactory");
const DualBladeCatalog_1 = require("./catalogs/DualBladeCatalog");
exports.Arsenal = [];
DualBladeCatalog_1.DualBladeList.forEach((item) => {
    const isStatus = !!item.status;
    const elemenentType = item.element || item.status;
    const newWeapon = (0, WeaponFactory_1.createDualBlade)(item.name, isStatus ? undefined : elemenentType, isStatus ? elemenentType : undefined);
    exports.Arsenal.push(newWeapon);
});
//# sourceMappingURL=Arsenal.js.map