const form = document.getElementById('form');
const passwords1El = document.getElementById('password1');
const passwords2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // using Constraint API
    isValid = form.checkValidity();
    console.log(isValid);
    // Style main message for error
    if(!isValid) {
    message.textContent = 'please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
    }
    // Check to see if Passwords Match
    if(passwords1El.value === passwords2El.value){
        passwordsMatch = true;
        passwords1El.style.borderColor = 'green';
        passwords2El.style.borderColor = 'green';
    }else {
        passwordsMatch = false;
        message.textContent = 'Make sure your password match!';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passwords1El.style.borderColor = 'red';
        passwords2El.style.borderColor = 'red';
        return;
    }
    // if password Successful
    if(isValid && passwordsMatch) {
        message.textContent = 'Successfully!'
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}
// Store FormData
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do Something With User Data
    console.log(user);
}


function processFormData(e) {  
    e.preventDefault();
  
    // Validate Form
    validateForm();
    // Store Data If Valid
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}







form.addEventListener('submit',processFormData);














































































































































































































