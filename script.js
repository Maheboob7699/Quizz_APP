




// Signup

let signupEmail = document.querySelector("#signIn-inpt");
let signupPassword = document.querySelector("#sigIn-pass");
let userFullName = document.querySelector("#user-inpt");
let signupCheck = document.querySelector("#check-signup");
let signupEmailError = document.querySelector(".sigunp-email-error");
let signupPasswordError = document.querySelector(".sigunp-password-error");
let signupUserError = document.querySelector(".sigunp-user-error");

let localLogin = JSON.parse(localStorage.getItem("UserDetail")) || [];



function signUp() {


  let random = Math.floor(Math.random() * localLogin.length)
  console.log(random);

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


  else if (!signupCheck.checked) {
    alert("please accept terms and condition");
  }


  else {
    let userDuplicate = false;
    for (let i = 0; i < localLogin.length; i++) {
      if (localLogin[i].name === userFullName.value && localLogin[i].name === signupEmail.value && localLogin[i].password === signupPassword.value) {
        userDuplicate = true;
        break;
      }
    }
    if (!userDuplicate) {
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
    else {
      alert("User is already exist");
    }
  }
}

function singupPassword() {
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
let targetedScore = JSON.parse(localStorage.getItem("updatedScore")) || [];


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
localLogin = JSON.parse(localStorage.getItem("UserDetail")) || [];

function start() {
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
  },


  // 
  {
    q: "Which tag is used to create a hyperlink in HTML?",
    a: "<link>",
    b: "<a>",
    c: "<href>",
    d: "<hlink>",
    ans: "b",
  },
  {
    q: "Which CSS property is used to change text color?",
    a: "font-color",
    b: "color",
    c: "text-color",
    d: "background-color",
    ans: "b",
  },
  {
    q: "Which attribute is used in HTML to include an external JavaScript file?",
    a: "href",
    b: "src",
    c: "link",
    d: "script",
    ans: "b",
  },
  {
    q: "Which of the following is a semantic HTML element?",
    a: "<div>",
    b: "<section>",
    c: "<span>",
    d: "<i>",
    ans: "b",
  },
  {
    q: "In CSS, what does the `z-index` property control?",
    a: "The stacking order of elements",
    b: "The zoom level of elements",
    c: "The width of an element",
    d: "The height of an element",
    ans: "a",
  },
  {
    q: "What does `===` do in JavaScript?",
    a: "Assigns a value to a variable",
    b: "Compares both value and type without type conversion",
    c: "Compares two strings only",
    d: "Checks if a variable is defined",
    ans: "b",
  },
  {
    q: "What is the purpose of the `useEffect` hook in React?",
    a: "To manage state in functional components",
    b: "To apply side effects in functional components",
    c: "To define lifecycle methods in class components",
    d: "To fetch API data in a synchronous way",
    ans: "b",
  },
  {
    q: "What is the default port for a React development server?",
    a: "8000",
    b: "3000",
    c: "5000",
    d: "8080",
    ans: "b",
  },
  {
    q: "How can you add inline styles in React?",
    a: "Using the `style` attribute with a string",
    b: "Using the `class` attribute",
    c: "Using the `style` attribute with a JavaScript object",
    d: "Using external CSS files only",
    ans: "c",
  },
  {
    q: "Which tag is used to include metadata in an HTML document?",
    a: "<header>",
    b: "<footer>",
    c: "<meta>",
    d: "<info>",
    ans: "c",
  },



];

let randomQuestion = [];
let usedIndices = new Set();  

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * questionsAndAnswers.length);
  
  if (usedIndices.has(randomNumber)) {
    i--;

  } else {
    usedIndices.add(randomNumber); 
    console.log("random number is", randomNumber);
    
    let questandAns = {
      q: questionsAndAnswers[randomNumber].q,
      a: questionsAndAnswers[randomNumber].a,
      b: questionsAndAnswers[randomNumber].b,
      c: questionsAndAnswers[randomNumber].c,
      d: questionsAndAnswers[randomNumber].d,
      ans: questionsAndAnswers[randomNumber].ans,
    };
    randomQuestion.push(questandAns);
  }
}


// localStorage.setItem("quizzData", JSON.stringify(questionsAndAnswers))
// let localQuizz = JSON.parse(localStorage.getItem("quizzData"));
// localLogin = JSON.parse(localStorage.getItem("UserDetail")) || [];

localStorage.setItem("quizzData", JSON.stringify(randomQuestion))
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
let loginLogout = document.querySelector(".login-logout");
let currentUser = document.querySelector(".current-user");

let index = 0;
let score = 0;
let progress = 10;
let selectedAnswer = [];
let currentIndex = 0;

for (let i = 0; i < localLogin.length; i++) {
  if (currentIndex < i) {
    currentIndex = i;
  }
}

currentUser.innerHTML = ` Hi ${localLogin[currentIndex].name}`;



let logout = false;
function logoutBtn() {

  if (!logout) {
    loginLogout.style.display = "block";
    logout = true;
  }
  else {
    loginLogout.style.display = "none";
    logout = false;
  }

}

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
      nextBtn.innerHTML = "Submit & Continue&#8594;";
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
    alert("are you sure to submit ")

    window.location.href = "dashboard.html";
  }
}




function scoreQuiz() {
  let optionSelected = false;
  selectOption.forEach((opt) => {
    if (opt.checked) {
      selectedAnswer.push({ answerId: opt.id, index: index });
      console.log(selectedAnswer);

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

// random number


function next() {
  scoreQuiz();
  console.log("Your Score is", score);
  if (index > 0) {
    previousBtn.style.display = "block";
  }

  render(index);
}

function quizzPage() {
  render(index);
}


// Dashboard
let scoreRender = JSON.parse(localStorage.getItem("UserDetail")) || [];
let sortedDetail = scoreRender.sort((a, b) => b.score - a.score);





function dashboardPage() {
  let rank1Name = document.querySelector(".rank1-name");
  let rank2Name = document.querySelector(".rank2-name");
  let rank3Name = document.querySelector(".rank3-name");
  let rank4Name = document.querySelector(".rank4-name");
  let rank5Name = document.querySelector(".rank5-name");
  let rank6Name = document.querySelector(".rank6-name");
  let rank1Score = document.querySelector(".rank1-score");
  let rank2Score = document.querySelector(".rank2-score");
  let rank3Score = document.querySelector(".rank3-score");
  let rank4Score = document.querySelector(".rank4-score");
  let rank5Score = document.querySelector(".rank5-score");
  let rank6Score = document.querySelector(".rank6-score");
  let currentRank = document.querySelector(".current-rank");


  let userIndex = 0;
  for (let i = 1; i < localLogin.length; i++) {
    if (userIndex < i) {
      userIndex = i;
    }
    console.log("user index", userIndex);

  }

  currentRank.innerText = `# ${userIndex + 1}`;

  rank1Name.innerText = sortedDetail[0].name;
  rank1Score.innerText = sortedDetail[0].quizzScore;

  let sortedName2 = (sortedDetail[1] && sortedDetail[1].name) ? sortedDetail[1].name : "No User";
  let sortedScore2 = (sortedDetail[1] && sortedDetail[1].quizzScore) ? sortedDetail[1].quizzScore : "No score";
  rank2Name.innerText = sortedName2;
  rank2Score.innerText = sortedScore2;

  let sortedName3 = (sortedDetail[2] && sortedDetail[2].name) ? sortedDetail[2].name : "No User";
  let sortedScore3 = (sortedDetail[2] && sortedDetail[2].quizzScore) ? sortedDetail[2].quizzScore : "No score";
  rank3Name.innerText = sortedName3;
  rank3Score.innerText = sortedScore3;

  let sortedName4 = (sortedDetail[3] && sortedDetail[3].name) ? sortedDetail[3].name : "No User";
  let sortedScore4 = (sortedDetail[3] && sortedDetail[3].quizzScore) ? sortedDetail[3].quizzScore : "No score";
  rank4Name.innerText = sortedName4;
  rank4Score.innerText = sortedScore4;

  let sortedName5 = (sortedDetail[4] && sortedDetail[4].name) ? sortedDetail[4].name : "No User";
  let sortedScore5 = (sortedDetail[4] && sortedDetail[4].quizzScore) ? sortedDetail[4].quizzScore : "No score";
  rank5Name.innerText = sortedName5;
  rank5Score.innerText = sortedScore5;

  let sortedName6 = (sortedDetail[5] && sortedDetail[5].name) ? sortedDetail[5].name : "No User";
  let sortedScore6 = (sortedDetail[5] && sortedDetail[5].quizzScore) ? sortedDetail[5].quizzScore : "No score";
  rank6Name.innerText = sortedName6;
  rank6Score.innerText = sortedScore6;


}

// admin

function admin() {
  let home = document.querySelector(".home");
  let sideBar = document.querySelector(".bar");
  let adminStart = document.querySelector(".admin-start");
  let tableContainer = document.getElementById("table-container")
  let scoreRender = JSON.parse(localStorage.getItem("UserDetail")) || [];
  let sortedDetail = scoreRender.sort((a, b) => b.score - a.score);


sideBar.addEventListener("click",function(){
  this.classList.add('rotate');
  
})

  home.addEventListener("click", function () {
    this.classList.add('clicked');
    adminStart.style.display = "none";
    let table = document.createElement("table");
  let headerRow = document.createElement("tr");
  let headers = ["Sr No.", "Name", "Email id", "Scores", "Action"];
  headers.forEach(header => {
    let th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  sortedDetail.forEach((user, index) => {
    let row = document.createElement("tr");
    let tdSrNo = document.createElement("td");
    tdSrNo.textContent = index + 1;
    let tdName = document.createElement("td");
    tdName.textContent = user.name;
    let tdEmail = document.createElement("td");
    tdEmail.textContent = user.email;
    let tdScores = document.createElement("td");
    tdScores.textContent = user.quizzScore;
    let tdAction = document.createElement("td");
    let actionButton = document.createElement("button");
    actionButton.classList = "veiw-result-btn"
    actionButton.textContent = "view result";
    tdAction.appendChild(actionButton);

    row.appendChild(tdSrNo);
    row.appendChild(tdName);
    row.appendChild(tdEmail);
    row.appendChild(tdScores);
    row.appendChild(tdAction);

    table.appendChild(row);

  })
  tableContainer.appendChild(table);
  })


  
}











