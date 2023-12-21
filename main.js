const form = document.querySelector('form');
const nomInput = document.querySelector('#InputNom');
const prenomInput = document.querySelector('#InputPrenom');
const telInput = document.querySelector('#InputTel');
const emailInput = document.querySelector('input[type=email]');
const sujetInput = document.querySelector('#InputSujet');
const msgInput = document.querySelector('#InputMessage');

// Lemotdep@ssequitue!!
// lasalledesport90gmail.com

let nomValid = false; 
let prenomValid = false; 
let telValid = false; 
let emailValid = false; 
let sujetValid = false; 
let msgValid = false; 

const UserRegex = /^[a-zA-Z-]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10}$/;
const SujetRegex = /^[^<>{}$]{3,200}$/;
const MessageRegex = /^[^<>{}$]{24,}$/;

function addClass(element, regex, value) {
  if (regex.test(value)) {
    element.classList.add('is-valid')
    element.classList.remove('is-invalid')
  } else {
    element.classList.remove('is-valid')
    element.classList.add('is-invalid')
  }
}

nomInput.addEventListener('input', e=>{
  addClass(nomInput, UserRegex, e.target.value);
  nomInput.classList.contains('is-valid') ? nomValid = true : nomValid = false;
});

prenomInput.addEventListener('input', e=>{
  addClass(prenomInput, UserRegex, e.target.value);
  prenomInput.classList.contains('is-valid') ? prenomValid = true : prenomValid = false;
});

telInput.addEventListener('input', e=>{
  let tel = e.target.value;
  tel = tel.replace(/ /g,'');
  tel = tel.replace(/^0/, '+33');
  addClass(telInput, PhoneNumberRegex, tel);
  telInput.classList.contains('is-valid') ? telValid = true : telValid = false;
});

emailInput.addEventListener('input', e=>{
  addClass(emailInput, EmailRegex, e.target.value);
  emailInput.classList.contains('is-valid') ? emailValid = true : emailValid = false;
});

sujetInput.addEventListener('input', e=>{
  addClass(sujetInput, SujetRegex, e.target.value);
  sujetInput.classList.contains('is-valid') ? sujetValid = true : sujetValid = false;
});

msgInput.addEventListener('input', e=>{
  addClass(msgInput, MessageRegex, e.target.value);
  msgInput.classList.contains('is-valid') ? msgValid = true : msgValid = false;
});

form.addEventListener('submit', e=>{
  e.preventDefault();
  if (nomValid && prenomValid && telValid && emailValid && sujetValid && msgValid) {
    // function envoyerMail
    Email.send({
      SecureToken : "541db457-7e64-4568-be76-67caedbec9e6",
      To : 'lasalledesport90@gmail.com',
      From : "lasalledesport90@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
      message => {
        alert(message)
      }
    );
  }
})