


// Login 
let email = document.querySelector("#email-inpt");
let password = document.querySelector("#pass-inpt");
let loginBTn = document.querySelector(".login-btn");
let emailAlert = document.querySelector(".email-alert");
let passwordAlert = document.querySelector(".password-alert");

let specialSymbol =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let patternSymbol = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/;

let numberPattern = /\d/;
let lowerCasePattern = /[a-z]/; 


let existingLogins = JSON.parse(localStorage.getItem("storeDetail")) || [];
function Login() {
  if (email.value == "" && password.value == "") {
    emailAlert.innerHTML = "Email is Empty";
    passwordAlert.innerHTML = "Password is Empty";

  }

  if (!email.value.includes("@")) {
    emailAlert.innerHTML="Special character '@' is missing.";
    return;
}
if (!email.value.includes(".com")) {
  emailAlert.innerHTML="Special character 'com' is missing.";
  return;
}

// Check if the email contains ".com" or other valid domain
if (!email.includes(".com") && !email.match(/\.[a-zA-Z]{2,}$/)) {
    alert("'.com' or a valid domain extension is missing.");
    return;
}

  else if (!specialSymbol.test(email.value)) {
    alert(" email is not valid");
    email.value = "";
    return
  }



  else if (email.value.length < 6) {
    emailAlert.innerHTML = "email is greater than 6";
    email.value = "";
    return
  }

  else if (email.value.length > 20) {
    emailAlert.innerHTML = "email is less than 20";
    email.value = "";
    return
  }

  else if (password.value == "") {
    passwordAlert.innerHTML = "Password is Empty";
  }
// else if(!patternSymbol.test(password.value)){
//   passwordAlert.innerHTML = "Password must contain at least one symbol";
//   password.value = "";
//   return
// }
else if(!numberPattern.test(password.value)){
  passwordAlert.innerHTML = "Password must contain at least one number";
  password.value = "";
  return
}

else if(!patternSymbol.test(password.value)){
  passwordAlert.innerHTML = "Password must contain at least one special character";
  password.value = "";
  return
}

else if(!lowerCasePattern.test(password.value)){
  passwordAlert.innerHTML = "Password must contain at least one lowercase";
  password.value = "";
  return
}


  else if (password.value.length > 10) {
    passwordAlert.inerHTML = "password is less then 10";
  }

  else {

    let loginDetail = {
      email: email.value,
      password: password.value,
    }
    

    existingLogins.push(loginDetail);
    localStorage.setItem("storeDetail", JSON.stringify(existingLogins))

    email.value = "";
    password.value = "";

    alert("Login succesfully");
    window.location.href = 'signup.html';


  }
}

// Signup

let signupEmail = document.querySelector("#signIn-inpt");
let signupPassword = document.querySelector("#sigIn-pass");
let signupEmailError = document.querySelector(".sigunp-email-error");
let signupPasswordError = document.querySelector(".sigunp-password-error");

let localLogin = JSON.parse(localStorage.getItem("storeDetail"))


function Signup() {
  if (signupEmail.value == "" && signupPassword.value == "") {
    signupEmailError.innerHTML = "Email is Empty";
    signupPasswordError.innerHTML = "Password is Empty";
    return
  }

  for (let i = 0; i < localLogin.length; i++) {
    if (signupEmail.value === localLogin[i].email && signupPassword.value === localLogin[i].password) {
      alert("Detail Match");
      signupEmail.value = "";
      signupPassword.value = "";


      window.location.href = "Start.html";
      return
    }
    else {
      alert("Detail is not match");
    }
  }
}


// Start 


  let userName = document.querySelector("#userName");
  let userEmail = document.querySelector("#userEmail");
  let userContact = document.querySelector("#userContact");
  let startBtn = document.querySelector(".startquiz-btn");


let userDetail=[];

  let LocalDetail = JSON.parse(localStorage.getItem("startDetils"));
  console.log(LocalDetail);
  

  function Start(){
    if(userName.value=="" && userEmail.value=="" && userContact.value==""){
      alert("ll field re reuired");
    }
    else{
      let Details={
        name:userName.value,
        email:userEmail.value,
        contact:userContact.value,
        score: 0,
      }
      // userDetail.push(Details);
      // localStorage.setItem("startDetils",JSON.stringify(userDetail))
      LocalDetail.push(Details)
      localStorage.setItem("startDetils",JSON.stringify(LocalDetail))
      userName.value=="";
      userEmail.value=="";
      userContact.value=="";
      alert("succesfully");
      window.location.href="quizz.html";
     
    }
    
  }


  // function StartPage(){
  //   Start()
  // }










// Quizz


const questionsAndAnswers = [
  {
    q: "What is HTML?",

    a: "A programming language",
    b: "A markup language for structuring content",
    c: "A database management system",
    d: "A CSS framework",

    ans: "b",
  },
  {
    q: "What does CSS stand for?",

    a: "Cascading Style Sheets",
    b: "Cascading Script Sheets",
    c: "Custom Style Sheets",
    d: "Creative Styling Sheets",

    ans: "a",
  },
  {
    q: "What is JavaScript primarily used for?",

    a: "Creating static web pages",
    b: "Styling web pages",
    c: "Adding interactivity to web pages",
    d: "Designing web pages",

    ans: "c",
  },
  {
    q: "Which of the following is used to define a class in CSS?",

    a: ".className",
    b: "#className",
    c: "$className",
    d: "&className",

    ans: "a",
  },
  {
    q: "What is the purpose of the 'alt' attribute in an <img> tag?",

    a: "To define the width of the image",
    b: "To add a caption to the image",
    c: "To provide alternative text for the image",
    d: "To add a border around the image",

    ans: "c",
  },
  {
    q: "In React, what does 'state' represent?",

    a: "Data passed from parent to child components",
    b: "Local data storage within a component",
    c: "A way to style components",
    d: "A method to define props",

    ans: "b",
  },
  {
    q: "Which of these is used to declare a variable that cannot be reassigned in JavaScript?",

    a: "var",
    b: "let",
    c: "const",
    d: "immutable",

    ans: "c",
  },
  {
    q: "What is JSX in React?",

    a: "A JavaScript extension for defining styles",
    b: "A syntax extension for writing HTML in JavaScript",
    c: "A library for state management",
    d: "A new type of JavaScript function",

    ans: "b",
  },
  {
    q: "Which CSS property is used to change the text color?",

    a: "color",
    b: "background-color",
    c: "font-color",
    d: "text-color",

    ans: "a",
  },

  {
    q: "What does the '===' operator do in JavaScript?",

    a: "Compares values and performs type conversion",
    b: "Compares both value and type without type conversion",
    c: "Compares two strings only",
    d: "Assigns a value to a variable",

    ans: "b",
  }
];

localStorage.setItem("quizzData", JSON.stringify(questionsAndAnswers))

let localQuizz = JSON.parse(localStorage.getItem("quizzData"));
 LocalDetail = JSON.parse(localStorage.getItem("startDetils")) || [];
 
  
console.log(localQuizz);

question = document.querySelector("h2");
let questionRemain = document.querySelector("h1");
let selectOption = document.querySelectorAll(".option");
let option1 = document.querySelector("#quizz-option1");
let option2 = document.querySelector("#quizz-option2");
let option3 = document.querySelector("#quizz-option3");
let option4 = document.querySelector("#quizz-option4");
// let SubmitBtn = document.querySelector(".submit-btn");
let previousBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");
let progressContainer = document.querySelector(".progress-container");

let index = 0;
let score = 0;
let progress = 10;
let selectedAnswer =[];






function render(index) {

  if (index <=localQuizz.length-1) {
    questionRemain.innerHTML = `Question ${index + 1} to ${localQuizz.length}`;
    question.textContent = localQuizz[index].q;
    option1.textContent = localQuizz[index].a;
    option2.textContent = localQuizz[index].b;
    option3.textContent = localQuizz[index].c;
    option4.textContent = localQuizz[index].d;
    progressContainer.style.width = `${progress}%`;
    console.log(index,localQuizz.length-1);

    if(index ===localQuizz.length-2 ){
      questionRemain.innerHTML = ` last 2 Question Left`;
    }

     if(index ===localQuizz.length-1 ){
      questionRemain.innerHTML = ` Hey This is last Question `;
       nextBtn.innerHTML= "Sumbit";

    }

  }

  
  else if (index === localQuizz.length) {
    for(i=0; i<LocalDetail.length; i++){
      if(LocalDetail[i].score === 0){
        LocalDetail[i].score  = score;
    }
  }
    localStorage.setItem("startDetils",JSON.stringify(LocalDetail))
    window.location.href = "dashboard.html";

  }

}

function scoreQuiz() {
  selectOption.forEach((opt) => {
    if (opt.checked) {
      if (opt.id === localQuizz[index].ans) {
        selectedAnswer.push({ answerId: opt.id, index: index });
        score += 10;
     
        console.log(selectedAnswer);
        
        console.log(score);
        opt.checked = false;
      }
    }
  });
}

function previousData() {
  if (selectedAnswer[index].answerId === localQuizz[index].ans) {
    selectOption.forEach(opt => {
      if (opt.id === selectedAnswer[index].answerId) {
        opt.checked = true;
      }
    });
    console.log("Previous Data");
  }
}



function previous() {
 if(index>0){
  index--;
  previousData();
  progress -= 10;
  render(index);
 }
}
function next() {
  scoreQuiz();
  index++;
  console.log("Your Score is",score);
  if(index>0){
    previousBtn.style.display = "block";
  }
  progress += 10;
  render(index);
}


function quizzpage(){
  render(index);
}


// Dashboard
let scoreRender = JSON.parse(localStorage.getItem("startDetils")) || [];
let sortedDetail = scoreRender.sort((a, b) => b.score - a.score);
console.log(sortedDetail[0].score);

function DashboardPage(){
  let rank1Display = document.querySelector(".rank1-display");
  let rank2Display = document.querySelector(".rank2-display");
  let rank3Display =document.querySelector(".rank3-display");
  let  rank1Name = document.querySelector(".rank1-name");
  let  rank2Name = document.querySelector(".rank2-name");
  let  rank3Name = document.querySelector(".rank3-name");

 
  
  rank1Display.innerText =  sortedDetail[0].score;
  rank2Display.innerText =  sortedDetail[1].score;
  rank1Name.innerText = sortedDetail[0].name;
  rank2Name.innerText =  sortedDetail[1].name;

 let sortedName3 =(sortedDetail[2] && sortedDetail[2].name) ? sortedDetail[2].name : "No User";
  let sortedScore3 = (sortedDetail[2] && sortedDetail[2].score) ? sortedDetail[2].score : "NO score";
  rank3Name.innerText = sortedName3;
  rank3Display.innerText = sortedScore3;

  
  // rank3Display.innerText = sortedScore3;
}













