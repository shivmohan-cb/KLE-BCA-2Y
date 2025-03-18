
// console.log(add(1,3));

import multiply, { add } from "./calculation.js";

let obj = {
    name: "someonename",
    title: "spirder",
    age: 24
}

// destructuring of object
let { title } = obj;

console.log(title);

console.log(add(1,9));

console.log(multiply(5,6));