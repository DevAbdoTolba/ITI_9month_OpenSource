let arr = [1,2,3,4]
let arrcopy = arr;

arr === arrcopy && console.log("Same Reference");

arrcopy.push(5);
console.log("Original Array:", arr);
console.log("Copied Array:", arrcopy);


let arr1 = [1,2,3,4]
let arrcopy1 = [...arr1];

arr1 === arrcopy1 || console.log("Different Reference");

arrcopy1.push(5);
console.log("Original Array:", arr1);
console.log("Copied Array:", arrcopy1);