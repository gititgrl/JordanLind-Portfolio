//Button that holds project 1
const projectText1 = document.getElementById("projectText1")
const projectText2 = document.getElementById("projectText2")

//function with timeout to change inner text from project 1 to coming soon and back again
projectText1.innerText = "BookWorm";
      projectText1.addEventListener("click", ()=>{
         window.open('https://bookworm-fullstack-app.up.railway.app/', '_blank');
      });
    //   document.getElementById("only_div").appendChild(btn);

projectText2.innerText = "Spacendar";
      projectText2.addEventListener("click", ()=>{
         window.open('https://spacendar.herokuapp.com/', '_blank');
      });
    //   document.getElementById("only_div").appendChild(btn);

// function comingSoon () {
//     projectText1.innerText = "Coming Soon!";
//     setTimeout(()=> {
//         projectText1.innerText = "BookWorm";
//     },3000);
// }

// //eventlistener mouseover
// projectText1.addEventListener('click', comingSoon)


