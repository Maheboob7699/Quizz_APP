




// Signup

let signupEmail = document.querySelector("#signIn-inpt");
let signupPassword = document.querySelector("#sigIn-pass");
let userFullName = document.querySelector("#user-inpt");
let signupCheck = document.querySelector("#check-signup");
let signupEmailError = document.querySelector(".sigunp-email-error");
let signupPasswordError = document.querySelector(".sigunp-password-error");
let signupUserError = document.querySelector(".sigunp-user-error");

let localLogin = JSON.parse(localStorage.getItem("UserDetail")) || [];


function Signup() {
  if (userFullName.value === "" && signupEmail.value === "" && signupPassword.value === "") {

    signupUserError.innerText = "user Name is Empty";
    signupEmailError.innerHTML = "Email is Empty";
    signupPasswordError.innerHTML = "Password is Empty";
    return;
  }

  else if (userFullName.value == "") {
    signupUserError.innerText = "user name is Empty";
    return;
  }

  else if (userFullName.value.length < 6) {
    signupUserError.innerText = "user name is less than 6";
    userFullName.value = "";
    return;
  }

  else if (userFullName.value.includes("@")) {
    signupUserError.innerText = "user name not contain  @";
    userFullName.value = "";
    return;
  }

  else if (userFullName.value.includes(".com")) {
    signupUserError.innerText = "user name not contain  .com";
    userFullName.value = "";
    return;
  }



  else if (signupEmail.value == "") {
    signupEmailError.innerHTML = "email is empty";
    signupEmail.value = "";
    return;
  }


  else if (!signupEmail.value.includes("@")) {
    signupEmailError.innerHTML = "Special character '@' is missing.";
    signupEmail.value = "";
    return;
  }

  else if (!signupEmail.value.includes(".com")) {
    signupEmailError.innerHTML = " '.com' is missing.";
    signupEmail.value = "";
    return;
  }


  else if (!specialSymbol.test(signupEmail.value)) {
    alert("Email is not valid");
    signupEmail.value = "";
    return;
  }

  else if (signupEmail.value.length < 6) {
    signupEmailError.innerHTML = "Email must be at least 6 characters long.";
    signupEmail.value = "";
    return;
  }

  else if (signupEmail.value.length > 20) {
    signupEmailError.innerHTML = "Email must be less than 20 characters.";
    signupEmail.value = "";
    return;
  }
  else if (signupPassword.value == "") {
    signupPasswordError.innerHTML = "Password is Empty";
    return;
  }



  else if (signupPassword.value.length < 6) {
    signupPasswordError.innerHTML = "Password must be greater than 6";
    signupPassword.value = "";
    return;
  }


  else if (!numberPattern.test(signupPassword.value)) {
    signupPasswordError.innerHTML = "Password must contain at least one number";
    signupPassword.value = "";
    return;
  }
  else if (!patternSymbol.test(signupPassword.value)) {
    signupPasswordError.innerHTML = "Password must be  contain at least one special character";
    signupPassword.value = "";
    return;
  }

  else if (!lowerCasePattern.test(signupPassword.value)) {
    signupPasswordError.innerHTML = "Password must contain at least one lowercase letter";
    signupPassword.value = "";
    return;
  }


  else if(!signupCheck.checked){
    alert("please accept terms and condition");
  }

  // else {
  //   let loginDetail = {
  //     name: userFullName.value,
  //     email: signupEmail.value,
  //     password: signupPassword.value,
  //     quizzScore: 0,
  //   }

  //   localLogin.push(loginDetail);
  //   localStorage.setItem("UserDetail", JSON.stringify(localLogin))
  //   userFullName.value = "",
  //     signupEmail.value = "",
  //     signupPassword.value = "";
  //     signupCheck.checked = false;

  //   alert("Login succesfully");
  //   window.location.href = 'login.html';
  // }

  else{
    let userDuplicate = false;
    for(let i=0 ;i<localLogin.length; i++){
      if(localLogin[i].name === userFullName.value || localLogin[i].name === signupEmail.value || localLogin[i].password === signupPassword.value){
        userDuplicate = true;
        break;
      }
    }
    if(!userDuplicate){
        let loginDetail = {
      name: userFullName.value,
      email: signupEmail.value,
      password: signupPassword.value,
      quizzScore: 0,
    }
    localLogin.push(loginDetail);
    localStorage.setItem("UserDetail", JSON.stringify(localLogin))
    userFullName.value = "",
      signupEmail.value = "",
      signupPassword.value = "";
      signupCheck.checked = false;
    alert("signup succesfully");
    window.location.href = 'login.html';
    }
    else{
      alert("User is already exist");
    }
  }
}

function SingupPassword() {
  let passwordShow = document.querySelector("#sigIn-pass")
  if (passwordShow.type === "password") {
    passwordShow.type = "text";
    showPassword.style.display = "block";
    hidePassword.style.display = "none";


  }
  else {
    passwordShow.type = "password";
    showPassword.style.display = "none";
    hidePassword.style.display = "block";
  }
}


// Login 
let email = document.querySelector("#email-inpt");
let password = document.querySelector("#pass-inpt");
let loginBTn = document.querySelector(".login-btn");
let emailAlert = document.querySelector(".email-alert");
let passwordAlert = document.querySelector(".password-alert");
let passordDisplay = document.querySelector(".password-display")
let hidePassword = document.querySelector(".hide-password");
let showPassword = document.querySelector(".show-password");

let specialSymbol = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let patternSymbol = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/;
let numberPattern = /\d/;
let upperCasepattern = /[A-Z]/;
let lowerCasePattern = /[a-z]/;
localLogin = JSON.parse(localStorage.getItem("UserDetail")) || [];
let targetedScore =  JSON.parse (localStorage.getItem("updatedScore"))||[];


function Login() {
  if (email.value == "" && password.value == "") {
    emailAlert.innerHTML = "Email is Empty";
    passwordAlert.innerHTML = "Password is Empty";

  }
  else if (email.value.length < 6) {
    emailAlert.innerHTML = "email is less than 6 ";
    email.value = "";

    return;
  }

  else if (!email.value.includes("@")) {
    emailAlert.innerHTML = "Special character '@' is missing.";
    email.value = "";

    return;
  }
  else if (!email.value.includes(".com")) {
    emailAlert.innerHTML = "'com' is missing.";
    email.value = "";
    return;
  }


  else if (!specialSymbol.test(email.value)) {
    alert(" email is not valid");
    email.value = "";
    return
  }

  else if (password.value == "") {
    passwordAlert.innerHTML = "Password is Empty";
  }


  else if (!numberPattern.test(password.value)) {
    passwordAlert.innerHTML = "Password must contain at least one number";
    password.value = "";
    return;
  }
  else if (!patternSymbol.test(password.value)) {
    passwordAlert.innerHTML = "Password must be , and contain at least one special character";
    password.value = "";
    return;
  }

  else if (!lowerCasePattern.test(password.value)) {
    passwordAlert.innerHTML = "Password must contain at least one lowercase letter";
    password.value = "";
    return;
  }

  else {
    let matchFound = false;
    for (let i = 0; i < localLogin.length; i++) {
      if (email.value === localLogin[i].email && password.value === localLogin[i].password) {
        let updatedName = {
          name: localLogin[i].name,
        }
        targetedScore.push(updatedName);
        localStorage.setItem("updatedScore", JSON.stringify(targetedScore))
        
        email.value = "";
        password.value = "";
        alert("login Succesfully")
        window.location.href = "quizz.html";
        return
      }
    }
    if (!matchFound) {
      email.value = "";
      password.value = "";
      alert("User detail is not Match");
    }
  }
}
function passwordShow() {
  let passwordShow = document.querySelector("#pass-inpt")
  if (passwordShow.type === "password") {
    passwordShow.type = "text";
    showPassword.style.display = "block";
    hidePassword.style.display = "none";


  }
  else {
    passwordShow.type = "password";
    showPassword.style.display = "none";
    hidePassword.style.display = "block";
  }
}


// Start 
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userContact = document.querySelector("#userContact");
let startBtn = document.querySelector(".startquiz-btn");
let userNameAlert = document.querySelector(".username-alert");
let userEmailAlert = document.querySelector(".useremail-alert");
let userContactAlert = document.querySelector(".usercontact-alert");
console.log(userNameAlert);
localLogin = JSON.parse(localStorage.getItem("UserDetail")) || [];

function Start() {
  if (userName.value == "" && userEmail.value == "" && userContact.value == "") {
    alert("All field are required");
  }
  else if (userName.value == "") {
    alert("username is empty")
    userNameAlert.innerText = "username is empty";
    userName.value = "";
  }

  else if (userName.value.includes("@")) {
    userNameAlert.innerText = "username not contain '@' sumbol ";
    userName.value = "";
  }
  else if (userName.value.includes(".com")) {
    userNameAlert.innerText = "username not contain '.com' sumbol "
    userName.value = "";
  }

  else if (userEmail.value == "") {
    userEmailAlert.innerText = "email is empty";
    userEmail.value = "";
  }

  else if (userEmail.value.length < 6) {
    userEmailAlert.innerText = "email is greater than 6";
    signupEmail.value = "";
    return;
  }
  else if (!userEmail.value.includes("@")) {
    userEmailAlert.innerText = "email also contain @ symbol";
    userEmail.value = "";
    return;
  }

  else if (!userEmail.value.includes(".com")) {
    userEmailAlert.innerText = "email also contain .com symbol";
    userEmail.value = "";
    return;
  }


  else if (!specialSymbol.test(userEmail.value)) {
    userEmailAlert.innerText = "Email is not valid";
    signupEmail.value = "";
    return;
  }

  else if (userEmail.value.length > 20) {
    userEmailAlert.innerText = "email is less than  20";
    userEmail.value = "";
    return;
  }

  else if (userContact.value == "") {
    userContactAlert.innerText = "contact no  is Empty";
    userContact.value = "";
    return;
  }
  else if (userContact.value.length < 6) {
    userContactAlert.innerText = "contact no  is greater than 6 ";
    userContact.value = "";
    return;
  }

  else if (!numberPattern.test(userContact.value)) {
    userContactAlert.innerText = "contact number contain only number";
    userContact.value = "";
    return;
  }

  else {
    let userFound = false;
    for (let i = 0; i < localLogin.length; i++) {
      if (userName.value === localLogin[i].name && userEmail.value === localLogin[i].email) {
        alert("Detail Match");
        userName.value = "";
        userEmail.value = "";
        userFound = true;
        window.location.href = "quizz.html";
        return
      }
    }
    if (!userFound) {
      userName.value = "";
      userEmail.value = "";
      userContact.value = "";
      alert("User detail is not Match");
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
localLogin = JSON.parse(localStorage.getItem("UserDetail")) || [];


console.log(localQuizz);

question = document.querySelector("h2");
let questionRemain = document.querySelector("h1");
let selectOption = document.querySelectorAll(".option");
let option1 = document.querySelector("#quizz-option1");
let option2 = document.querySelector("#quizz-option2");
let option3 = document.querySelector("#quizz-option3");
let option4 = document.querySelector("#quizz-option4");
let previousBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");
let progressContainer = document.querySelector(".progress-container");

let index = 0;
let score = 0;
let progress = 10;
let selectedAnswer = [];

function render(index) {
  if (index <= localQuizz.length - 1) {
    questionRemain.innerHTML = `Question ${index + 1} of ${localQuizz.length}`;
    question.textContent = localQuizz[index].q;
    option1.textContent = localQuizz[index].a;
    option2.textContent = localQuizz[index].b;
    option3.textContent = localQuizz[index].c;
    option4.textContent = localQuizz[index].d;

    progress = ((index + 1) / localQuizz.length) * 100;
    progressContainer.style.width = `${progress}%`;

    if (index === localQuizz.length - 2) {
      questionRemain.innerHTML = `Last 2 Questions Left`;
    }

    if (index === localQuizz.length - 1) {
      questionRemain.innerHTML = `Hey, This is the Last Question!`;
      nextBtn.innerHTML = "Submit";
    }

    nextBtn.style.display = index === localQuizz.length ? "none" : "block";
    previousBtn.style.display = index === 0 ? "none" : "block";
  }

  else {
    for (let i = 0; i < localLogin.length; i++) { 
      if (localLogin[i].quizzScore === 0) {
        localLogin[i].quizzScore = score;
      }
    
    }
    localStorage.setItem("UserDetail", JSON.stringify(localLogin));
    console.log(localLogin);

    window.location.href = "dashboard.html";
  }
}

function scoreQuiz() {
  let optionSelected = false;
  selectOption.forEach((opt) => {
    if (opt.checked) {
      selectedAnswer[index] = { answerId: opt.id, index: index };
      optionSelected = true;
      if (opt.id === localQuizz[index].ans) {
        score += 10;
      }
      opt.checked = false;
      index++;
      progress = ((index + 1) / localQuizz.length) * 100;
    }
  });

  if (!optionSelected) {
    alert("Please select an option before proceeding!");
    return;
  }
}


function scoreQuiz() {
  let optionSelected = false;
  selectOption.forEach((opt) => {
    if (opt.checked) {
      selectedAnswer.push({ answerId: opt.id, index: index });
      optionSelected = true;
      if (opt.id === localQuizz[index].ans) {
        score += 10;
        console.log(selectedAnswer);
        console.log(score);
      }
      opt.checked = false;
      index++;
      progress += 10;
    }
  });


  if (!optionSelected) {
    alert("Please select an option before proceeding!");
    return;
  }
}


function previousData() {
  if (selectedAnswer[index]) { 
    selectOption.forEach((opt) => {
      if (opt.id === selectedAnswer[index].answerId) {
        opt.checked = true; 
      }
    });
  }
}

function previous() {
  if (index > 0) {
    index--;
    previousData();
    progress -= 10;
    render(index);
  }
}

function next() {
  scoreQuiz();
  console.log("Your Score is", score);

  if (index > 0) {
    previousBtn.style.display = "block";
  }

  render(index);
}

function quizzpage() {
  render(index);
}


// Dashboard
let scoreRender = JSON.parse(localStorage.getItem("UserDetail")) || [];
let sortedDetail = scoreRender.sort((a, b) => b.score - a.score);





function DashboardPage() {
  let rank1Display = document.querySelector(".rank1-display");
  let rank2Display = document.querySelector(".rank2-display");
  let rank3Display = document.querySelector(".rank3-display");
  let currentRank = document.querySelector(".current-rank");
  let rank1Name = document.querySelector(".rank1-name");
  let rank2Name = document.querySelector(".rank2-name");
  let rank3Name = document.querySelector(".rank3-name");
  let rank1Img = document.querySelector(".rank1-img");
  let rank2Img = document.querySelector(".rank2-img");
  let rank3Img = document.querySelector(".rank3-img");
  let rank2Ranking = document.querySelector(".rank2-ranking");
  let rank3Ranking = document.querySelector(".rank3-ranking");

let userIndex = 0;
for(let i=1; i<localLogin.length; i++){
  if(userIndex<i){
    userIndex = i;
  }
  console.log("user index",userIndex);
}

  currentRank.innerText = `# ${userIndex+1}`;

  rank1Display.innerText = sortedDetail[0].quizzScore;
  rank1Name.innerText = sortedDetail[0].name;

  (sortedDetail[0]) ? rank1Img.style.display = "block" : "";
  (sortedDetail[1]) ? rank2Img.style.display = "block" : "";
  (sortedDetail[2]) ? rank3Img.style.display = "block" : "";


  (sortedDetail[1]) ? rank2Ranking.innerText = "#2" : "";
  (sortedDetail[2]) ? rank3Ranking.innerText = "#3" : "";

  let sortedName2 = (sortedDetail[1] && sortedDetail[1].name) ? sortedDetail[1].name : "No User";
  let sortedScore2 = (sortedDetail[1] && sortedDetail[1].quizzScore) ? sortedDetail[1].quizzScore : "No score";
  
  rank2Name.innerText = sortedName2;
  rank2Display.innerText = sortedScore2;

  let sortedName3 = (sortedDetail[2] && sortedDetail[2].name) ? sortedDetail[2].name : "No User";
  let sortedScore3 = (sortedDetail[2] && sortedDetail[2].score) ? sortedDetail[2].score : "No score";
  rank3Name.innerText = sortedName3;
  rank3Display.innerText = sortedScore3;

}













