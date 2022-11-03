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
