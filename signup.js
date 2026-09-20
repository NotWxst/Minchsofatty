const EmailField = document.getElementById("email");
const PasswordField = document.getElementById("password");

const eyeIcon = document.querySelector(".eye-icon");

function togglePassword() {
    if (PasswordField.type == "password") {
        PasswordField.type = "text";
        eyeIcon.classList.add("hide");
    }else {
        PasswordField.type = "password";
        eyeIcon.classList.remove("hide");
    }
}

function AddAccount(user, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];


    users.push({user: user, password: password});

    localStorage.setItem('users',JSON.stringify(users));
}

function SignupAccount() {
    let UserContent = EmailField.value;
    let PasswordContent = PasswordField.value;

    AddAccount(UserContent, PasswordContent);
    alert("Them tai khoan thanh cong")
}