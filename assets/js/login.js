let users = localStorage.getItem("users");

let loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", login);
function login() {
    let modals = document.querySelectorAll("#exampleFormControlInput1");
    let id = modals[0].value;
    let pw = modals[1].value;
    if (id == "ssafy" && pw == "1234") {
        let before_login = document.querySelector("#before_login");
        let after_login = document.querySelector("#after_login");
        before_login.style.display = "none";
        after_login.style.display = "flex";
    } else {
        alert("아이디 혹은 비밀번호 확인")
    }
}

let logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", logout);
function logout() {
    let before_login = document.querySelector("#before_login");
    let after_login = document.querySelector("#after_login");
    before_login.style.display = "flex";
    after_login.style.display = "none";
}

let signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", signUp);
function signUp() {
    let modals = document.querySelectorAll("#exampleFormControlInput1");
    let id = modals[2].value;
    let pw = modals[3].value;
    let pw_confirm = modals[4].value;
    if (pw != pw_confirm) {
        alert("비밀번호가 일치하지 않습니다");
    } else {
        alert("회원 가입 완료");
    }
}