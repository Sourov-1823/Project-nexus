const LoginForm = document.querySelector('.LoginForm');
const SignupForm = document.querySelector('.SignupForm');
const LoginLink = document.querySelector('.LoginLink');
const RegisterLink = document.querySelector('.RegisterLink');
RegisterLink.onclick=()=>{
    SignupForm.classList.add('active');
    LoginForm.classList.add('active');
}
LoginLink.onclick=()=>{
    SignupForm.classList.remove('active');
    LoginForm.classList.remove('active');
}
