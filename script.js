


// Login 
let email = document.querySelector("#email-inpt");
let password = document.querySelector("#pass-inpt");
let loginBTn = document.querySelector(".login-btn");
let emailAlert = document.querySelector(".email-alert");
let passwordAlert = document.querySelector(".password-alert");

let emailSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

let existingLogins = JSON.parse(localStorage.getItem("storeDetail")) || [];
function Login() {
  if (email.value == "") {
    emailAlert.innerHTML = "Email is Empty";

  }

  else if (!emailSymbol.test(email.value)) {
    alert("Sepcial character is required in Email")
    email.value = "";
    return
  }

  else if (!emailSymbol.test(email.value)) {
    emailAlert.innerHTML = "Email must contain at least one special character";
    email.value = ""; // Clear email input if invalid
    return;
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

  else if (password.value == "") {
    passwordAlert.innerHTML = "password is Empty";
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

      window.location.href = "Start.html";
      return
    }
    else {
      alert("Detail is not match");
    }
  }
}






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
let localScore = JSON.parse(localStorage.getItem("scoreDetail"))
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





function render(index) {
  console.log(index)
  if (index < localQuizz.length) {
    console.log(index, questionRemain, localQuizz.length);

    questionRemain.innerHTML = `Question ${index + 1} to ${localQuizz.length}`;
    question.textContent = localQuizz[index].q;
    option1.textContent = localQuizz[index].a;
    option2.textContent = localQuizz[index].b;
    option3.textContent = localQuizz[index].c;
    option4.textContent = localQuizz[index].d;
    progressContainer.style.width = `${progress}%`;
  }

  else if (index === localQuizz.length) {
    questionRemain.innerHTML = `Question ${index + 1} to ${localQuizz.length}`;
    console.log("final Score is", score);
    // let scoreArray = [];
    // scoreArray.push(score);
    // localStorage.setItem("scoreDetail",JSON.stringify(scoreArray));
    localScore.push(score)
    localStorage.setItem("scoreDetail", JSON.stringify(localScore))
    window.location.href = "dashboard.html";

  }

}

function scoreQuiz() {
  selectOption.forEach((opt) => {
    if (opt.checked) {
      if (opt.id === localQuizz[index].ans) {
        score += 10;
      }
    }
  });
}

scoreQuiz();

function previous() {
 if(index<0){
  index--;
  progress -= 10;
  render(index);
 }
}
function next() {
  scoreQuiz();
  index++;
  if(index>0){
    previousBtn.style.display = "block";
  }
  progress += 10;
  render(index);
}


function quizzpage(){
  render(index);
  // scoreQuiz();
}










