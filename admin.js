// login
  
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

let adminEmail  = "admin@gmail.com";
let adminPassword = "mumbai1@";
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

  else if(email.value === adminEmail && password.value === adminPassword){
          window.location.href = "admin.html";
  }
}


// login-end //

let home = document.querySelector(".home");
let user = document.querySelector(".user-menu");
let quizz = document.querySelector(".quizz-menu");
let menuSection = document.querySelector(".menu-section");
let logoutUser = document.querySelector(".admin-logout");
let logoutUserDetail = document.querySelector(".logout-user-detials");
let logout = document.querySelector(".logout");
let quizzSection = document.querySelector(".quizz-section");
let quizzContainer = document.querySelector(".quizz-conatiner");
let testInformation = document.querySelector(".particualr-user");
let partciularTestDetail = document.querySelector(".particualr-user-test-detail");
let particualrUserTest = document.querySelector(".particular-user-test");
let particualrUserScore = document.querySelector(".particualr-user-score");
let particualrUserDate = document.querySelector(".particualr-user-date");
let userData  = document.querySelector(".user-data");
let sideBar = document.querySelector(".side-bar");
let addQuestion = document.querySelector(".add-question");
let adminStart = document.querySelector(".admin-start");
let cancleButton = document.querySelector(".cancle-button");
let createQuestion = document.querySelector(".create-questions");
let tableContainer = document.getElementById("table-container")
let scoreRender = JSON.parse(localStorage.getItem("UserDetail")) || [];

let sortedDetail = scoreRender.sort((a, b) => b.score - a.score);

let questionInput = document.querySelector("#question-input");
let option1Input = document.querySelector("#option1-input");
let option2Input = document.querySelector("#option2-input");
let option3Input = document.querySelector("#option3-input");
let option4Input = document.querySelector("#option4-input");
let questionSelect = document.querySelector(".select-option");
let selectAnswer = document.querySelector("#select-answer");
let sumbitCreateQuestion = document.querySelector(".sumbit-create-question");
let quizzRender = document.querySelector(".quizz-show");
let cancleDetail = document.querySelector(".cancel-details");


let userName = document.querySelector(".user-name");
let userEmail = document.querySelector(".user-email");
let particularUser = document.querySelector(".particualr-user");


let displayQuestion = document.querySelector(".display-question");
let displayOption1 = document.querySelector(".display-option1");
let displayOption2 = document.querySelector(".display-option2");
let displayOption3 = document.querySelector(".display-option3");
let displayOption4 = document.querySelector(".display-option4");
let displayAnswer = document.querySelector(".display-answer");

console.log(displayQuestion);


let editQuestions = document.querySelector(".edit-questions");
let editQuest = document.querySelector("#edit-question-input");
let editOption1 = document.querySelector("#edit-option1-input");
let editOption2 = document.querySelector("#edit-option2-input");
let editOption3 = document.querySelector("#edit-option3-input");
let editOption4 = document.querySelector("#edit-option4-input");
let editSelectAnswer = document.querySelector("#edit-select-answer");
let editCancleButton = document.querySelector(".edit-cancle-button");
let submitEditButton = document.querySelector(".sumbit-edit-question");



logoutUser.addEventListener("click",function(){
    console.log("KHKSH<JS");
    logoutUserDetail.style.display="block";
    logoutUserDetail.style.display="flex";
    logoutUserDetail.style.flexDirection = "column"
    
    
})


logout.addEventListener("click",function(){
    alert("are you sure to logout");
    window.location.href = "adminLogin.html";
})

let menuShow = true;
sideBar.addEventListener("click", function () {
    if (menuShow) {
        menuSection.style.display = "none";
        menuShow = false;
    } 
    else {
        menuSection.style.display = "block";
        menuShow = true;
    }
})


cancleButton.addEventListener("click", function () {
    createQuestion.style.display = "none";

})
// home
 home.addEventListener("click", function () {
    home.classList.add('clicked');
    user.classList.remove('clicked');
    adminStart.style.display = "block";
    quizz.classList.remove('clicked');
    tableContainer.style.display = "none";
    quizzSection.style.display = "none";
    quizzRender.style.display = "none";
    cancleDetail.style.display = "none";
    particularUser.style.display = "none";
    

})


// User
user.addEventListener("click", function () {
    user.classList.add('clicked');
    adminStart.style.display = "none";
    quizz.classList.remove('clicked');
    home.classList.remove('clicked');
    tableContainer.style.display = "block";
    quizzSection.style.display = "none";


    if (tableContainer.querySelector("table")) {
        return;
    }

    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    let headers = ["Sr No.", "Name", "Email id", "Scores", "Action"];
    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    sortedDetail.forEach((user, userIndex) => {
                   console.log("index is", userIndex);
                   console.log("user is", user);
                   

        let row = document.createElement("tr");
        let tdSrNo = document.createElement("td");
        tdSrNo.textContent = userIndex + 1;
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

    //   home end



    // view result button
        actionButton.addEventListener("click", function () {
            tableContainer.style.display="none";
             console.log(sortedDetail[userIndex].name);
             
            console.log(userIndex);
            let userView = JSON.parse(localStorage.getItem("UserViewDetails"));
            console.log(userView[userIndex]);
            
            console.log(userView[userIndex].questions);
            let selectedIdAnswer =userView[userIndex].questions[0]; // 
            let selectId= selectedIdAnswer.selectedId; // Access the;
                console.log(selectId);
           
            
            let table = document.createElement("table");
            table.className="userDetails";
            let headerRow = document.createElement("tr");
            let headers = ["Test", "Name", "Date", "Scores", "Results"];
            headers.forEach(header => {
                let th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
            console.log(table);

            let userDetials = userView[userIndex].questions;
            console.log(userDetials);
            

            userDetials.forEach((userData,userDataIndex)=>{
                console.log(userDataIndex);
                
                particularUser.style.display ="block";
                scoreRender = JSON.parse(localStorage.getItem("UserDetail")) || [];
                sortedDetail = scoreRender.sort((a, b) => b.score - a.score);
                
                console.log(sortedDetail[userIndex].name);
                console.log(sortedDetail[userIndex].email);
                userName.innerHTML = sortedDetail[userIndex].name;
                userEmail.innerHTML = sortedDetail[userIndex].email;
                console.log(particularUser);
                
                let selectedIdAnswer =userView[userIndex].questions[userDataIndex]; // 
                
                let selectId= selectedIdAnswer.selectedId; // Access the;
                    console.log(selectId);
            
    
                let row = document.createElement("tr");
                row.className="userDetails"
                let tdTest = document.createElement("td");
                tdTest.textContent = userDataIndex + 1;
                let tdName = document.createElement("td");
                tdName.textContent = userView[userIndex].name;
                let tdDate = document.createElement("td");
                tdDate.textContent = userData.date;
                let tdScores = document.createElement("td");
                tdScores.textContent = userData.score ;
                let tdResult = document.createElement("td");
                let resultButton = document.createElement("button");
                resultButton.className = "result-btn"
                resultButton.textContent = "result";
                tdResult.appendChild(resultButton);

                // resultbutton start

                let questionDisplay = userData.quest;
                console.log(questionDisplay);
            
                 tdResult.addEventListener("click",function(){
                    partciularTestDetail.style.display="block";
                    partciularTestDetail.style.display="flex";
                    particualrUserTest.innerText = `Test ${userDataIndex + 1}`;
                    particualrUserScore.innerText=`Score ${userData.score}`
                    particualrUserDate.innerText  = `Test Date:- ${userData.date}`
                    


               let userDetails = document.querySelector(".userDetails");
                 userDetails.style.display= "none";
                   questionDisplay.forEach((data, dataIndex)=>{
                    console.log(data,dataIndex);
                   
                    

        
                    let commonOptions = "options";
                    let testStore = document.createElement("div");
                    testStore.className = `test-store question-${dataIndex}`;
                    testStore.classList.add="test-store";

                        //   question
                    let questiondiv = document.createElement("div");
                    questiondiv.className = "question";
                    let questionHeading = document.createElement("h3");
                    questionHeading.textContent = "Question";
                    let question = document.createElement("div");
                    question.textContent = data.q;
                    questiondiv.appendChild(questionHeading);
                    questiondiv.appendChild(question);


                         // Option 1
                    let option1div = document.createElement("div");
                    option1div.className = `${commonOptions} option-1`;  
                    option1div.id = "a";  
                    let option1heading = document.createElement("h3");
                    option1heading.textContent = "Option 1";
                    let option1 = document.createElement("div");
                    option1.textContent = data.a;
                    option1div.appendChild(option1heading);
                    option1div.appendChild(option1);

                    //     // Option 2
                    let option2div = document.createElement("div");
                    option2div.className = `${commonOptions} option-2`;  
                    option2div.id = "b"; 
                    let option2heading = document.createElement("h3");
                    option2heading.textContent = "Option 2";
                    let option2 = document.createElement("div");
                    option2.textContent = data.b;
                    option2div.appendChild(option2heading);
                    option2div.appendChild(option2);


                            // Option 3
                    let option3div = document.createElement("div");
                    option3div.className = `${commonOptions} option-3`;  
                    option3div.id = "c"; 
                    let option3heading = document.createElement("h3");
                    option3heading.textContent = "Option 3";
                    let option3 = document.createElement("div");
                    option3.textContent = data.c;
                    option3div.appendChild(option3heading);
                    option3div.appendChild(option3);
        
                            // Option 4
                    let option4div = document.createElement("div");
                    option4div.className = `${commonOptions} option-4`;  
                    option4div.id = "d";  
                    let option4heading = document.createElement("h3");
                    option4heading.textContent = "Option 4";
                    let option4 = document.createElement("div");
                    option4.textContent = data.d;
                    option4div.appendChild(option4heading);
                    option4div.appendChild(option4);

                    testStore.appendChild(questiondiv);
                    testStore.appendChild(option1div);
                    testStore.appendChild(option2div);
                    testStore.appendChild(option3div);
                    testStore.appendChild(option4div);

                    let particualrUser = document.querySelector(".particualr-user");
                    particualrUser.appendChild(testStore);

                    let allOptions = testStore.querySelectorAll(`.${commonOptions}`);
                     allOptions.forEach((option) => {
                    
                     if(option.id === selectId[dataIndex].id && selectId[dataIndex].id === data.ans){
                        option.style.backgroundColor = 'rgb(97 219 97)';
                     }
                     if(option.id === selectId[dataIndex].id && selectId[dataIndex].id!== data.ans){
                       option.style.backgroundColor = "red";
                       console.log("option.id === data.ans" , option.id , data.ans)

                       allOptions.forEach((option) => {
                        if(option.id == data.ans){
                            option.style.backgroundColor = "grey";
                           }
                       })

                       
                     }
                     


                    //   if(option.id === selectId[dataIndex].id){
                    //     option.style.backgroundColor = "orange";


                    //   }



            
                     });
                   })
                 })

                //ResultButton end
                row.appendChild(tdTest);
                row.appendChild(tdName);
                row.appendChild(tdDate);
                row.appendChild(tdScores);
                row.appendChild(tdResult);
                table.appendChild(row);
                console.log(table);
         particularUser.appendChild(table);  
        
            })
            
            // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//        
        });
        
         // view result button end
    })
    tableContainer.appendChild(table);
    
})

// user click on quizz add amd remove quizz

quizz.addEventListener("click", function () {
    quizz.classList.add('clicked');
    home.classList.remove('clicked');
    user.classList.remove('clicked');
    adminStart.style.display = "none";
    tableContainer.style.display = "none";
    // userTestDetails.style.display="none";
    quizzSection.style.display = "block";
    particularUser.style.display = "none";

    if (quizzContainer.querySelector("table")) {
        return;
    }
      let localQuizz = JSON.parse(localStorage.getItem("quizzData"));

    let tableQuizz = document.createElement("table");
    quizzRow = document.createElement("tr");
    headers = ["Sr No", "Questions", "Actions"];
    headers.forEach((header) => {
        let headerRow = document.createElement("th");
        headerRow.innerText = header;
        quizzRow.appendChild(headerRow);
    })

    tableQuizz.appendChild(quizzRow);

    function showQuizz() {
        console.log(localQuizz);

        tableQuizz.innerHTML = "";

        localQuizz.forEach((quizzData, index) => {
            console.log(quizzData);

            let row = document.createElement("tr");
            row.className = "row-data";

            let tdSrNo = document.createElement("td");
            tdSrNo.textContent = index + 1;

            let tdName = document.createElement("td");
            tdName.textContent = quizzData.q;

            let tdAction = document.createElement("td");
            let showButton = document.createElement("button");
            showButton.classList = "show-quizz";
            let showIcon = document.createElement("i");
            showIcon.classList.add("fa-regular", "fa-eye");
            showButton.appendChild(showIcon);

            let editButton = document.createElement("button");
            editButton.classList = "edit-quizz";
            let editIcon = document.createElement("i");
            editIcon.classList.add("fa-solid", "fa-pencil");
            editButton.appendChild(editIcon);

            let deleteButton = document.createElement("button");
            deleteButton.classList = "delete-quizz";
            let deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fa-solid", "fa-trash-can");
            deleteButton.appendChild(deleteIcon);

            tdAction.appendChild(showButton);
            tdAction.appendChild(editButton);
            tdAction.appendChild(deleteButton);

            row.appendChild(tdSrNo);
            row.appendChild(tdName);
            row.appendChild(tdAction);

            tableQuizz.appendChild(row);

            //   if user click show icon then particular form is show
            showButton.addEventListener("click", function () {
                console.log("index is", index);
                console.log("items is ", quizzData);
                displayAnswer.innerHTML = quizzData.q;
                displayOption1.innerHTML = quizzData.a;
                displayOption2.innerHTML = quizzData.b;
                displayOption3.innerHTML = quizzData.c;
                displayOption4.innerHTML = quizzData.d;
                displayAnswer.innerHTML = quizzData.ans;
                quizzRender.style.display = "block";
                cancleDetail.addEventListener("click", function () {
                    quizzRender.style.display = "none";
                })
            });

            // if user click on edit then change it
            editButton.addEventListener("click", function () {
                console.log(quizzData);
                editQuest.value = quizzData.q;
                editOption1.value = quizzData.a;
                editOption2.value = quizzData.b;
                editOption3.value = quizzData.c;
                editOption4.value = quizzData.d;
                editSelectAnswer.value = quizzData.ans;
                editQuestions.style.display = "block";

                editCancleButton.addEventListener("click", function () {
                    editQuestions.style.display = "none";
                })


                submitEditButton.addEventListener("click", function () {
                    console.log("edit submit");
                    quizzData.q = editQuest.value;
                    quizzData.a = editOption1.value;
                    quizzData.b = editOption2.value;
                    quizzData.c = editOption3.value;
                    quizzData.c = editOption4.value;
                    quizzData.ans = editSelectAnswer.value;
                    localQuizz[index] = quizzData;
                    localStorage.setItem("quizzData", JSON.stringify(localQuizz))
                    editQuestions.style.display = "none";
                })
            })

            // if user click delete then specific row will be delete
            deleteButton.addEventListener("click", function () {
                row.remove();
                localQuizz.splice(index, 1);
                localStorage.setItem("quizzData", JSON.stringify(localQuizz));
                showQuizz();
            });
        });

        console.log(tableQuizz);
        quizzContainer.appendChild(tableQuizz);
    }
    showQuizz();


    // question add
    addQuestion.addEventListener("click", function () {
        createQuestion.style.display = "block";

    })

    sumbitCreateQuestion.addEventListener("click", function () {
        let insertQuestionandAns = {
            q: questionInput.value.trim(),
            a: option1Input.value,
            b: option2Input.value,
            c: option3Input.value,
            d: option4Input.value,
            ans: selectAnswer.value,
        }
        console.log("select ans", selectAnswer.value);
        localQuizz.unshift(insertQuestionandAns);
        localStorage.setItem("quizzData", JSON.stringify(localQuizz));
        showQuizz();
        createQuestion.style.display = "none";
    })

})











