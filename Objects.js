class typeAttack {
    constructor(heroClass) {
        this.heroClass = heroClass;
        this.attack = this.attackFunction(); // Chama a função para definir o ataque
    }

    attackFunction() {
        let attack; 

        if (this.heroClass === "Wizard") {
            attack = "used magic.";
        } else if (this.heroClass === "Warrior") {
            attack = "used a sword.";
        } else if (this.heroClass === "Monk") {
            attack = "used martial arts.";
        } else {
            attack = "used a shuriken.";
        }
        
        return attack; 
    }

    write() {
        console.log(`The ${this.heroClass} attacked using ${this.attack}`);
    }
}

let journey = new typeAttack("Warrior");
journey.write(); 
