
export class MonsterCreator {
    name: string;
    damageMonster: number;
    lifePointsMonster: number;
    dodgeChanceBase: number;
    attackChanceBase: number;

    constructor(
        name: string,
        damageMonster: number,
        lifePointsMonster: number,
        dodgeChanceBase: number,
        attackChanceBase: number
    ) {
        this.name = name;
        this.damageMonster = damageMonster;
        this.lifePointsMonster = lifePointsMonster;
        this.dodgeChanceBase = dodgeChanceBase;
        this.attackChanceBase = attackChanceBase;
    }



    rollDodgeChance() { }

    attackHunter(hunter: {
        lifePointsHunter: number;
        dodgeChanceBase: number;
        name: string;
    }): void {
        if (this.attackChanceBase > hunter.dodgeChanceBase) {
            const damage = hunter.lifePointsHunter - this.damageMonster;
            const damageDealt = hunter.lifePointsHunter - damage;
            const lifeActualHunter = hunter.lifePointsHunter - damageDealt;
            hunter.lifePointsHunter = lifeActualHunter;
            console.log(
                `O monstro ${this.name}, deu ${damageDealt} de dano ao caçador ${hunter.name}, agora ele tem ${lifeActualHunter} de vida restante`
            );
            if (hunter.lifePointsHunter <= 0) {
                console.log(`Derrota, o monstro derrotou o caçador, o monstro ${this.name} resistiu com ${this.lifePointsMonster} de vida restante`);
            }
        } else {
            console.log(`O caçador ${hunter.name} desviou com sucesso`);
        }
    }
}
