//About me Page
//Button to open and close Resume
const openBtn = document.getElementById('openResume')
console.log(openBtn);
const closeBtn = document.getElementById('closeResume')
console.log(closeBtn);

//Modal element
const modal = document.getElementsByClassName('modal')


//Function to change modal display to block
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


//Sending contact info function using smtp
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "jordanlind2017@gmail.com",
      Password: "1029Qazmko0!",
      To: "jordanlind2017@gmail.com",
      From: document.getElementById("email").value,
      Subject: "New Contact Enquiry",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Message: " +
        document.getElementById("note").value,
    }).then((message) => alert("Message Sent!"));
  }







