var savedUserData = [];
var userName = document.querySelector(`.user-name`);
var userEmail = document.querySelector(`.user-email`);
var userPassword = document.querySelector(`.user-password`);
var userEmailLogin = document.querySelector(`.user-email-login`);
var userPasswordLogin = document.querySelector(`.user-password-login`);
if (localStorage.getItem(`user data`) != null) {
    savedUserData = JSON.parse(localStorage.getItem(`user data`))
}

function saveData() {
    var newUser = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    };
    savedUserData.push(newUser);
    localStorage.setItem(`user data`,JSON.stringify(savedUserData));
    console.log(savedUserData);
    userName.value = ``;
    userEmail.value = ``;
    userPassword.value = ``;
}
function openHomePage() {
    for(i=0 ; i<savedUserData.length ; i++){
        if(userEmailLogin == savedUserData[i].email && userPasswordLogin == savedUserData[i].password){
            open("../HTML/home.html")
            console.log(`you are user`);
        }else{
            alert(`email or password is not valid`)
            console.log(`you are not user`);
        }
        console.log(i);
    }
}
postMessage(JSON.stringify(savedUserData),"")
console.log(savedUserData);