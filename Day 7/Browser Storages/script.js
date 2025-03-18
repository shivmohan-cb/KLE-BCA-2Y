const form1 = document.querySelector("#form1");
const inputs1 = document.querySelectorAll("#form1 input");// three input elements

const form2 = document.querySelector("#form2");
const inputs2 = document.querySelectorAll("#form2 input");

// for storing data of form1
let form1Data = {};

// -----------------------local storage ------------------------

// taking form1 inputs
inputs1.forEach( elm => {// adding event listener of type change to all inputs
    elm.addEventListener("change",(e)=>{
    //  console.log(e);// => target => name, value
      let name = e.target.name;
      let value = e.target.value;
    //   console.log(name,value);
      form1Data[name] = value; // form1Data = { name:"value", eamil : "valueofemail", pass: "valueof pass" }
    //   console.log(form1Data);
    })
})

// setting name as a key in localstorage and shiv as a value of that key
localStorage.setItem("name","shiv");
localStorage.setItem("type","local storage");

/// getting the item value from local storage
console.log(localStorage.getItem("type"));

form1.addEventListener("submit",(e)=>{
e.preventDefault();// preventing the default behaviour of form submit

 // local storage
   let stringifiedForm1Data = JSON.stringify(form1Data);// stringified form1data because localStorage cannot store object

  localStorage.setItem("form1",stringifiedForm1Data); 
   
 console.log("form data is saved in local storage successfully");
});


// -----------------------------session storage -------------------

let form2Data = {};

inputs2.forEach( elm => {// adding event listener of type change to all inputs
    elm.addEventListener("change",(e)=>{
    //  console.log(e);// => target => name, value
      let name = e.target.name;
      let value = e.target.value;
    //   console.log(name,value);
      form2Data[name] = value; // form1Data = { name:"value", eamil : "valueofemail", pass: "valueof pass" }
    //   console.log(form2Data);
    })
})

// setting name as a key in sessionStorage and shiv as a value of that key
sessionStorage.setItem("name","shiv");
sessionStorage.setItem("type","session storage");

/// getting the item value from session storage
console.log(sessionStorage.getItem("type"));

form2.addEventListener("submit",(e)=>{
e.preventDefault();// preventing the default behaviour of form submit

 // local storage
   let stringifiedForm2Data = JSON.stringify(form2Data);// stringified form1data because sessionStorage cannot store object

  sessionStorage.setItem("form2",stringifiedForm2Data); 
   
 console.log("Form data is saved in session storage successfully");
});