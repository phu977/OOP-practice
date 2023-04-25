class Hero {
    constructor(health, mana) {
        this.health = health;
        this.mana = mana;

    }

    useQ() {

    }
    useW() {

    }
    useE() {

    }
    useR() {

    }



    cast(skillName, targets) {
        let skill;
        // if (targets.length == 0){
        //     return
        // }
        if (targets.length > 0) {
            if (skillName == "Q") {
                skill = this.useQ();
            }
            if (skillName == "W") {
                skill = this.useW();
            }
            if (skillName == "E") {
                skill = this.useE();
            }
            if (skillName == "R") {
                skill = this.useR();
            }

            if (this.mana >= skill.mana) {
                this.mana -= skill.mana
                skill.action(targets)

            }

        }



    }
}
class HeroA extends Hero {
    constructor(health, mana) {
        super(health, mana);
    }
    useQ() {
        return ({
            mana: 2,
            action: function (targets) {
                targets.forEach(hero => {
                    hero.health = hero.health - 15;

                });

            }
        })
    }
    useW() {
        return ({
            mana: 3,
            action: function (targets) {
                targets.forEach(hero => {
                    hero.health = hero.health - 10;
                })
                this.health += 10;
                this.mana += 5;

            }
        })
    }
    useE() {
        return ({
            mana: 5,
            action: function (targets) {
                targets[0].health = targets[0].health - 30
            }
        })

    }
    useR() {
        return ({
            mana: 5,
            action: function (targets) {
                targets.forEach(hero => {
                    hero.health = hero.health - 30;

                });
            }
        })
    }

}
class HeroB extends Hero {
    constructor(health, mana) {
        this.health = health;
        this.mana = mana;
    }
    useQ() {
        return ({
            mana: 3,
            action: function (targets) {
                targets.forEach(hero => {
                    hero.health = hero.health - 20;

                });

            }
        })
    }
    useW() {
        return ({
            mana: 3,
            action: function (targets) {
                targets[0].health = targets[0].health - 10;
                if (targets.length > 1) {
                    targets[1].health = targets[1].health - 10;
                }
            }
        })
    }
    useE() {
        return ({
            mana: 5,
            action: function (targets) {
                targets.forEach(hero => {
                    hero.health = hero.health - 20;
                })
                this.health += 20;
                this.mana += 5;
            }
        })
    }
    useR() {
        return ({
            mana: 0,
            action: function (targets) {
                targets[0].health = targets[0].health - 50;
                this.mana = 20;

            }
        })
    }
}