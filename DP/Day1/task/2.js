class Counter{
    constructor(){
        if (Counter.instance) return Counter.instance;


        
        this.count = 0;
        Counter.instance = this;
        this.count++;
        
    }
 
}

const a = new Counter();
const b = new Counter();

console.log(a.count);
console.log(b.count);
