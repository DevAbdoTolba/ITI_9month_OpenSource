// 1. Optional Chaining (?.)

let user = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Wonderland"
    }
};

console.log("User City:", user.address?.city);
console.log("User Zip Code:", user.address?.zipCode);



// 2. Nullish Coalescing (??)
let input = null;
let defaultValue = "Default Value";
let result = input ?? defaultValue;
console.log("Result :", result);



// 3. Bind operator ::
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

let person = { name: "Bob" };
let greetBob = greet.bind(person); // greet::person
console.log(greetBob("Hello", "!"));


// 4. RegExp.escape() 
if (!RegExp.escape) {
    RegExp.escape = function(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
}

let specialString = "Hello. How are you?";
let escapedString = RegExp.escape(specialString);
console.log("Escaped String:", escapedString);
