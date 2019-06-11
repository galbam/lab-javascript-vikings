// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      //still alive
      return `${this.name} has received ${damage} points of damage`;
    } else {
      //is dead
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      //still alive
      return `A Saxon has received ${damage} points of damage`;
    } else {
      //is dead
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    //attack
    let message = randomSaxon.receiveDamage(randomViking.strength);

    //remove deads
    for (var i = this.saxonArmy.length-1; i>=0; i--) {
      if (this.saxonArmy[i].health <= 0) {
        this.saxonArmy.splice(i, 1);
      }
    }

    //return
    return message;
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    //attack
    let message = randomViking.receiveDamage(randomSaxon.strength);

    //remove deads
    for (let i = 0; i < this.vikingArmy.length; i++) {
     if (this.vikingArmy[i].health <= 0) {
       this.vikingArmy.splice(i, 1);
     }
   }

    //return
    return message;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`;
    }

    if (this.vikingArmy.length <= 0) {
      return `Saxons have fought for their lives and survive another day...`;
    }

    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
