let localQuizz = JSON.parse(localStorage.getItem("quizzData"));

let home = document.querySelector(".home");
let quizz = document.querySelector(".quizz-menu");
let quizzSection = document.querySelector(".quizz-section");
let quizzContainer = document.querySelector(".quizz-conatiner");
let sideBar = document.querySelector(".bar");
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



let displayQuestion = document.querySelector(".display-question");
let displayOption1 = document.querySelector(".display-option1");
let displayOption2 = document.querySelector(".display-option2");
let displayOption3 = document.querySelector(".display-option3");
let displayOption4 = document.querySelector(".display-option4");
let displayAnswer = document.querySelector(".display-answer");
let cancle
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

sideBar.addEventListener("click", function () {
    this.classList.add('rotate');

})



cancleButton.addEventListener("click", function () {
    createQuestion.style.display = "none";

})

home.addEventListener("click", function () {
    home.classList.add('clicked');
    quizz.classList.remove('clicked');
    tableContainer.style.display = "block";
    adminStart.style.display = "none";
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

quizz.addEventListener("click", function () {
    quizz.classList.add('clicked');
    home.classList.remove('clicked');

    adminStart.style.display = "none";
    tableContainer.style.display = "none";
    quizzSection.style.display = "block";

    if (quizzContainer.querySelector("table")) {
        return;
    }


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
                quizzRender.style.display="block";
                cancleDetail.addEventListener("click",function(){
                    quizzRender.style.display="none";
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
                    localStorage.setItem("quizzData",JSON.stringify(localQuizz))
                    editQuestions.style.display="none";
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

    })




})











