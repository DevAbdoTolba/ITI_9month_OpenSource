class Inventory {
    check() { console.log("Stock checked"); }
}
class Payment {
    process() { console.log("Payment processed"); }
}
class Shipping {
    ship() { console.log("Item shipped"); }
}

class StoreFacade {
    constructor() {
        this.inv = new Inventory();
        this.pay = new Payment();
        this.ship = new Shipping();
    }
    order() {
        this.inv.check();
        this.pay.process();
        this.ship.ship();
    }
}

new StoreFacade().order();