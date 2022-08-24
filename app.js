function User(first_name, last_name, email, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
}

const form = document.getElementById("form");

//register
form.addEventListener('submit', function (e) {
    e.preventDefault();

    //get inputs values
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    //check if email is exist
    let users = JSON.parse(localStorage.getItem("users")) || [];
 
    let isExist = users.find((user) => user.email === email);
    if (isExist) {
        return alert('The email is used!');
    }
console.log(isExist)
    //add new user
    let newUser = new User(fname, lname, email, password);
    users.push(newUser);
    localStorage.removeItem("users");
    localStorage.setItem("users", JSON.stringify(users));

    //clear register form
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
})

//login
const loginForm = document.getElementById("Login_form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //get email and password
    let email = document.getElementById("login_form").value
    let password = document.getElementById("login_password").value

    //check if user is exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find((user) => user.email === email && user.password === password);
    if (!currentUser) {
        alert("Email or Password is incorrect")
    }

    //save user to local storage
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    alert("welcome " + currentUser.first_name);

    //go to tasks page
    location.href = 'tasks.html'
})

const changeThemeBtn = document.querySelector('#changeTheme');
const currentTheme = JSON.parse(localStorage.getItem('theme')) || {};
let body = document.querySelector('body');
body.style.backgroundColor = currentTheme.backgroundColor || 'white';
body.style.color = currentTheme.color || 'black';
changeThemeBtn.textContent = currentTheme.btn || '🌚';

changeThemeBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let body = document.querySelector('body');
    body.style.backgroundColor = body.style.backgroundColor != 'black' ? 'black' : 'white';
    body.style.color = body.style.color != 'white' ? 'white' : 'black';
    changeThemeBtn.textContent = changeThemeBtn.textContent != '🌞' ? '🌞' : '🌚';


    const theme = {
        'backgroundColor': body.style.backgroundColor,
        'color': body.style.color,
        'btn': changeThemeBtn.textContent
    }
    localStorage.setItem('theme', JSON.stringify(theme));
})

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});