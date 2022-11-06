//About me Page
//Button to open and close Resume
const openBtn = document.getElementById('openResume')
const closeBtn = document.getElementById('closeResume')

//Modal element
const modal = document.getElementsByClassName('modal')

//Fucntion to change modal display to block
//For loop to find display in modal css
const openModal = () => {
    for (i = 0; i<modal.length; i++) {
    modal[i].style.display = 'block';
}
}

const closeModal = () => {
    for (i = 0; i<modal.length; i++) {
    modal[i].style.display = 'none';
}
}
//event listener to open modal at the bottom!
openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)











// //Contact Page
// //Get elements in contact me div into an object
// const fields = {}
// const sendBtn = document.getElementById('send')

// //All fieldss linked to an event
// document.addEventListener('DOMContentLoaded', function(){
//     fields.name = document.getElementById('name');
//     fields.email = document.getElementById('email');
//     fields.note = document.getElementById('note');
// })

// //Check if fieldss are filled
// function isNotEmpty(value) {
//     if (value== null || typeof value =='undefined') return false;
// //Make sure fields is more than one character long
//     return (value.length > 0)
// }

// //Checking if fields is an email and return it as lowercase
// function isEmail (email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
// }
// //Check all conditions and if there is an error, returns a red fields
// function validfields(fields, validationFunction) {
//     if (fields == null) return false;

//     let isfieldsValid = validationFunction(fields.value)
//     if (!isfieldsValid) {
//         fields.className = 'placeholderRed';
//     } else {
//         fields.className = '';
//     }
//     return isfieldsValid
// }
// //check if everything is valid function
// function isValid() {
//     let valid = true;
//     valid &= validfields(fields.name, isNotEmpty);
//     valid &= validfields(fields.email, isNotEmpty);
//     valid &= validfields(fields.note, isNotEmpty);

//     return valid
// }
// //Making a user class constructor to log all fieldss
// class User {
//     constructor(name,email,note) {
//         this.name = name;
//         this.email = email;
//         this.note = note;
//     }
// }
// //Sending all the fieldss!
// function sendContactInfo() {
//     if (isValid()) {
//         let usr = new User(fields.name.value,fields.email.value,fields.note.value);

//         //send an alert that it was submitted
//         alert(`${usr.fields.name} Your information was sent!`)

//     } else {
//         alert ('Hmm... Are you sure your information is correct? Try again.')
//     }
// }

// sendBtn.addEventListener('click', sendContactInfo)
// console.log(User.name);