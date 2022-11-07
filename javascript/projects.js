//Button that holds project 1
const projectText1 = document.getElementById("projectText1")

//function with timeout to change inner text from project 1 to coming soon and back again
function comingSoon () {
    projectText1.innerText = "Coming Soon!";
    setTimeout(()=> {
        projectText1.innerText = "Project 1";
    },3000);
}

//eventlistener mouseover
projectText1.addEventListener('click', comingSoon)


