import { Weapon } from "../interface/Moves";
import { createDualBlade } from "../factory/WeaponFactory";
import { DualBladeList } from "./catalogs/DualBladeCatalog";

export const Arsenal: Weapon[] = []

DualBladeList.forEach((item) => {
    const isStatus = !!item.status

    const elemenentType = item.element || item.status

    const newWeapon = createDualBlade(
        item.name,
        isStatus ? undefined : elemenentType,
        isStatus ? elemenentType : undefined
    )

    Arsenal.push(newWeapon)
})