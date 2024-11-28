


// Login 
let email  = document.querySelector("#email-inpt");
let password = document.querySelector("#pass-inpt");
let loginBTn = document.querySelector(".login-btn");
let emailAlert = document.querySelector(".email-alert");
let passwordAlert =document.querySelector(".password-alert");

let emailSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

let existingLogins = JSON.parse(localStorage.getItem("storeDetail")) || [];
function Login(){
    if(email.value==""){
                emailAlert.innerHTML="Email is Empty";
            
            }
        
            else if(!emailSymbol.test(email.value)){
                alert("Sepcial character is required in Email")
                email.value="";
                return
            }
        
            else if (!emailSymbol.test(email.value)) {
                emailAlert.innerHTML = "Email must contain at least one special character";
                email.value = ""; // Clear email input if invalid
                return;
            }
        
            else if(email.value.length<6 ){
               emailAlert.innerHTML="email is greater than 6";
                email.value="";
                return
            }
        
            else if(email.value.length>20 ){
                emailAlert.innerHTML="email is less than 20";
                email.value="";
                return
            }
        
             else if(password.value==""){
                passwordAlert.innerHTML="Password is Empty";
            }
        
            else if(password.value==""){
                passwordAlert.innerHTML="password is Empty";
                return
            }
        
            else if(password.value.length>10){
                passwordAlert.inerHTML="password is less then 10";
            }
        
            else{

                let loginDetail = {
                    email:email.value,
                    password:password.value,
                }

                existingLogins.push(loginDetail);
            localStorage.setItem("storeDetail",JSON.stringify(existingLogins))

            email.value="";
            password.value="";

            alert("Login succesfully");
            window.location.href = 'signup.html';


            }
}

// Signup

let signupEmail = document.querySelector("#signIn-inpt");
let signupPassword = document.querySelector("#sigIn-pass");
let signupEmailError= document.querySelector(".sigunp-email-error");
let signupPasswordError = document.querySelector(".sigunp-password-error");

let localLogin = JSON.parse(localStorage.getItem("storeDetail"))


for(let i=0; i<localLogin.length; i++){
    console.log(localLogin[i].email);
    
}
function Signup(){
    if(signupEmail.value=="" && signupPassword.value==""){
        signupEmailError.innerHTML="Email is Empty";
        signupPasswordError.innerHTML = "Password is Empty";
        return
    }

    for(let i=0; i<localLogin.length; i++){
      if( signupEmail.value === localLogin[i].email && signupPassword.value === localLogin[i].password){
             alert("Detail Match");

             window.location.href="Start.html";
             return
        }

        else{
            alert("Detail is not match");
        }
    }


    

    


    
}
