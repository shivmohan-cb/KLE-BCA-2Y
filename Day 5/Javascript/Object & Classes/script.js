// Classes

class Car {
  constructor(name, brand, color) {
    this.name = name;
    this.brand = brand;
    this.color = color;
  }
  changeName(name) {
    this.name = name;
  }
}

// create instance of class car
const newCar = new Car("swift", "maruti", "white");

console.log(newCar.name);
console.log(newCar.brand);
console.log(newCar.color);

newCar.changeName("baleno");

console.log(newCar.name);

// create a class name animal

class Animal {
  name;
  pet = false;
  owner = null;
  petName = null;

  giveName(name) {
    this.name = name;
  }

  giveOwnerName(name) {
    if (this.pet == true) {
      this.owner = name;
    } else {
      return "This animal cannot be a pet, therefore cannot have owner name";
    }
  }

  givePetName(name) {
    if (this.pet == true) {
      this.petName = name;
    } else {
      return "This animal cannot be a pet, therefore cannot have pet name";
    }
  }

  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor() {
    super(); // with this super keyword we have access of all properties and method of Animal class
    this.name = "Dog";
    this.pet = true;
  }
}

const newDog = new Dog();

console.log(newDog.getName());
// change petname of this dog
newDog.givePetName("moti");
console.log(newDog.petName);

newDog.petName = "shanki";
console.log(newDog.petName);

// -----------------------------------------------
// creating an instance of array class
let array = new Array();
console.log(array);

let bool = true;

let str = "name";

let obj = {};

let arr = [1, 2, 3, 4, 5];

console.log(typeof bool); // boolean
console.log(typeof str); // string
console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(typeof newDog); //object

//Array is a class in javascript
// we are able to access forEach because forEach is a method of Array class, there multiple methods of Array class

// forEach - return nothing
arr.forEach(function (elm, i, array) {
  console.log(elm, i, array);
});

// arr.map() - returns modified array

const modifiedArr = arr.map(function (elm, i, array) {
  return elm * 2; // modifying the values of arr
});

console.log(arr, modifiedArr);
// arr.filter()
// arr.flat()
//arr.slice()

// ---------------------------------------------------
// prototype - with prototype we can add method or member to existing class

Dog.prototype.color = "white";
Dog.prototype.giveColor = function (color) {
  this.color = color;
};

console.log(Array.prototype);
console.log(Dog.prototype);

const secDog = new Dog();

console.log(secDog.color);
secDog.giveColor("black");
console.log(secDog.color);

// ------------------------------------------------------------------

// concate string - +
let string = "my name is";
let name = "shiv";
let gradeYear = 2020;

let intro = string + " " + name + ". my gradutaion\tyear is \n" + gradeYear;

console.log(intro);

// template literals - ` `
let template = `My name is ${name}. My graduation "year" is "${gradeYear}".`;

console.log(template);

// --------------------------------------------------------------------
// arrow functions


const calcAndReturnArray = (a, b, c) => {
  const sumAB = a + b;
  const multiplyC = sumAB * c;
  const arr = [1, 3, 5];
  const modifiedArr = arr.map(function (elm) {
    return elm * multiplyC;
  });

  return modifiedArr;//[]
};


// when we have more than one parameter and no body just on return statement
const sum = (a, b) => a + b; // 1,3 => 4

// when we have one parameter and no body just on return statement
const strToNum = str => Number(str);// "123" => 123

console.log(strToNum("12345"));
console.log(sum(5,9));
console.log(calcAndReturnArray(1,4,2));
