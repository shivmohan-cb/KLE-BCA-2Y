// Non Blocking nature of JavaScript , code flow top to bottom

// first  all sycn task will complete than async task(task which takes time) will complete or what ever is in call queue

console.log("line 3");

setTimeout(() => {
  console.log("line 6");
}, 0); // 5sec

console.log("line 9");

function run() {
  console.log("run");
}

run();
run();
run();

// -------------------------------------------------------------
// Promises

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Swagat returned the laptop to Sindhu");
  }, 7000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Swagat rejected to give laptop back to Sindhu");
  }, 5000);
});

// when a promise is resolve it goes in then block
promise1.then((res) => {
  console.log(res);
});
// when a promise is rejected it goes in catch block
promise2.catch((res) => {
  console.log(res);
});

promise1.finally(() => {
  console.log("I will there finnally");
});
promise2.finally(() => {
  console.log("I will there finnally");
});
//-----------------------------------------------------------------
//async / await - async keyword is to create asyncronus function and await keyword is used for the last which takes time to make them act as sync
//  makePayment => orderSuccessfull

async function placeOrder() {
  try {
    const payment = await new Promise((res, rej) => {
      setTimeout(() => {
        // res("Payment Successfull");
        rej("payment issue");
      }, 10000); // 10s
    });
    console.log(payment);
    const order = await new Promise((res, rej) => {
      setTimeout(() => {
        res("Oreder Sucessfull Message Send");
      }, 2000); // 2s
    });
    console.log(order);
  } catch (err) {// when promise rejects this block will run
    console.log(err);
  }
}

placeOrder();

// --------------------------------------------------------------------
// fetch() - to fetch data asyncronusly
// fetching weather data

let url = "https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=5796abbde9106b7da4febfae8c44c232";

//JSON - javascript object notation
 let jsonObj = {
    "key1": "value1",
    "key2": "value2"
 };


fetch(url).then((res)=>{
 return res.json();
}).then((res)=>{
console.log(res);
});
