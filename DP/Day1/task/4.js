class Pizza {
    constructor() {this.ingerdiantes =[];}
}


class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    bread() {
        this.pizza.ingerdiantes.push('bread');
        return this;
    }

    motzarilla() {
        this.pizza.ingerdiantes.push('motzarilla');
        return this;
    }

    tomatoSauce() {
        this.pizza.ingerdiantes.push('tomato sauce');
        return this;
    }

    olives() {
        this.pizza.ingerdiantes.push('olives');
        return this;
    }

    build() {
        return this.pizza;
    }
}

const eat = new PizzaBuilder()
                            .bread()
                            .motzarilla()
                            .tomatoSauce()
                            .olives()
                            .olives()
                            .olives()
                            .build();

console.log(eat);
