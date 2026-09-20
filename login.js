const EmailField = document.getElementById("email");
const PasswordField = document.getElementById("password");

const eyeIcon = document.querySelector(".eye-icon");

function Login(user, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Change `username` to `user` to match the function parameter
    let foundUser = users.find(u => u.user === user && u.password === password);

    if (foundUser) {
        alert("Dang nhap thanh cong!");
        return true;
    } else {
        alert("Sai email hoac ten mat khau!");
        return false;
    }
}

function CheckLogin() {
    let UserContent = EmailField.value;
    let PasswordContent = PasswordField.value;

    let LoginStatus = Login(UserContent, PasswordContent);
    if (LoginStatus) {
        window.location.href = "portfolio.html"
    }
}



function togglePassword() {
    if (PasswordField.type == "password") {
        PasswordField.type = "text";
        eyeIcon.classList.add("hide");
    }else {
        PasswordField.type = "password";
        eyeIcon.classList.remove("hide");
    }
}