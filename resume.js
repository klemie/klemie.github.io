function toggleCard(id){
    const card = document.getElementById(id);
    card.classList.toggle("ion-hide");
}
//responsive 

const x = window.matchMedia("(min-width: 620px)");
const av = document.getElementById("avcon");
if(x.matches){
    av.classList.toggle("center");
}
