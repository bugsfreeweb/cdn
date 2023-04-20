// loginForm.addEventListener("submit", onLoginSubmit)

const loginBox = document.querySelector(".loginBox");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const mainBox = document.querySelector(".mainBox");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){ //Write your name in the form and hit enter, this is what you will run
    event.preventDefault(event); //stop refreshing
    loginBox.style = 'opacity: 0;'
    mainBox.classList.remove(HIDDEN_CLASSNAME); //show mainBox
    // loginForm.classList.add(HIDDEN_CLASSNAME); //make the form disappear
    const username = loginInput.value; //Enter your username
    localStorage.setItem(USERNAME_KEY, username); //save your username
    console.log(username); //print username
    paintGreetings(username); //Enter your username and say hello
}



function paintGreetings(typedname) {
    const { hours24 } = getClock(); //24 hour time call
    let greetingText;

    if (hours24 >= 5 && hours24 < 12) {
        greetingText = `Good morning, ${typedname}🌊`;
    } else if (hours24 >= 12 && hours24 < 18) {
        greetingText = `Good afternoon, ${typedname}🌈`;
    } else if (hours24 >= 18 && hours24 < 22) {
        greetingText = `Good evening, ${typedname}✨`;
    } else {
        greetingText = `Good night, ${typedname}🌝`;
    }

    greeting.innerText = greetingText;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY); //A variable to store the saved username
if(savedUsername === null){ //If there is nothing in the username stored variable
    //show the form
    loginBox.classList.remove(HIDDEN_CLASSNAME); //show me the form
    mainBox.classList.add(HIDDEN_CLASSNAME); //cover the mainBox
    loginForm.addEventListener("submit", onLoginSubmit); //When submitting, run onLoginSubmit
}else{ //If the user name stored variable has a name
    //show the greetings
    loginBox.classList.add(HIDDEN_CLASSNAME); //make the loginBox invisible
    mainBox.classList.remove(HIDDEN_CLASSNAME); //Make mainBox visible
    paintGreetings(savedUsername); 
}



