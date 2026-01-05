const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);



console.log('Even Numbers:');
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});



const squares = numbers.map(num => num * num);
console.log("Double: ", squares);


const obj = {
    value: 42,
    regularFunction: function() {
        console.log("Regular:", this.value);
    },
    arrowFunction: () => {
        console.log("Arrow:", this.value);
        console.log("Arrow:", this.value);
    }
};

obj.regularFunction();  
obj.arrowFunction();  
