let  array = [1,2,3,4,5];

array.pop();// removes and returns the last index value; 
array.push(6);// add the new element/value after the last index of array return undefined
array.shift(); //removes and returns the first index value of array 
array.unshift(0); // adds the new element to the first index of array
// pop() - to eleminate last index value of array
// push() - to add new element to the last index of array
// shift() - to eleminate first index value of array
// unshift(); to add new element to the first index of array

// create an array 
let fruits = ["apple","banana","orange","grapes","pineapple"];

console.log(fruits)
// remove the last element/index value from fruits array
fruits.pop();
console.log(fruits)

// add new element  "gauava" to the last index
fruits.push("gauava");
console.log(fruits);

// remove element from 0th index of array
fruits.shift();
console.log(fruits);

// add new element to the 0th index
fruits.unshift("Kivi");
console.log(fruits);

// array.slice() - return the element without changing the orignal array; 
// first argument is starting index and second argument is count of element after the starting index   

let threeFruits = fruits.slice(2);
console.log(threeFruits);
console.log(fruits.slice(0,2));
console.log(fruits);


// object methods

let obj = {
    name:"Prajwal",
    age: 21,
    college: "KLE - Mahalingpur"
}

const keyOfObj =  Object.keys(obj);//return array of all key of object
const valueOfObj = Object.values(obj);// return array of all values of object
const entriesOfObj = Object.entries(obj);//return array of arrays and each array with key and value ["key","value"]

console.log("Keys of Obj :",keyOfObj);
console.log("Values of Obj :",valueOfObj);
console.log("All Entries of Obj :",entriesOfObj);

// ways of accessing the key value of object
// . operator with key
// [] with key
// obnoxius accessing

let newObj = {
    name : "new name",
    "123" : "number",
    "roll": 1234,
    "f-n-f" : 50000
}
// console.log name of newObj
let name = newObj.name;
let roll =newObj.roll;
let rool = newObj["roll"];
let oneTow3 = newObj["123"];
let fnf = newObj["f-n-f"];
console.log(name,roll,rool,oneTow3,fnf);

// DOM Manipulation
const emptyDiv = document.querySelector("#empty-div");

console.log(emptyDiv);
console.log(emptyDiv.textContent);

//textContext is to give only text value to elements
emptyDiv.textContent = "hello this div is no more empty div";

// innerHTML is to write/embed html tag or text content in the selected element
emptyDiv.innerHTML = "<h3>Replace with text content</h3>";

// to select ul tag
//  embed 5 li tags and text value should be 1, 2, 3, 4, 5 of each li respectively.
let count = 6;
let liString = "";
for(let i=1;i<=count;i++){
    liString += "<li>"+ i +"</li>"
}
// console.log(liString);
const ul = document.querySelector("ul");

ul.classList.add("unordered");

ul.innerHTML = liString;// we embed html tags with innerHTML
// ul.innerText = "<h1>hello</h1>";//but with innerText only text value

// add class "list-item" to all li tags
const liTags= document.querySelectorAll("ul li");// returns array of li tags

for(let i=0;i<liTags.length;i++){
    //adding class name list-item to each li tag
    liTags[i].classList.add("list-item");
}

//remove class form last li tag
liTags[liTags.length - 1].classList.remove("list-item");

// ul.classList.remove("unordered");
ul.classList.add("list");

ul.classList.toggle("list");//remove list class

ul.classList.toggle("list");// add list class to ul tag
// set attribute
ul.setAttribute("id","unique-ul");
// get attribute
const ulID =  ul.getAttribute("id");
console.log(ulID);
const ulClass = ul.getAttribute("class");
console.log(ulClass);

// create element
const newLi = document.createElement("li");
newLi.textContent = "This new li we appended";

// appending the new element
ul.append(newLi);

const footerTag = document.createElement("footer");
footerTag.innerHTML = "<p>This is footer of webpage</p>"

footerTag.classList.add("foot");

footerTag.setAttribute("id","foot-1");

const bodyTag = document.querySelector("body");

bodyTag.append(footerTag);
