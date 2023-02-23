const containerEL=document.querySelector("p")
const btnsEL=document.querySelectorAll("button")

const [italic,bold,color,background,reset,custom]=btnsEL
italic.addEventListener("click", function () {
    containerEL.classList.toggle("italic")
})
bold.addEventListener("click", function () {
    containerEL.classList.toggle("bold")
})

color.addEventListener("click", function () {
 let color=prompt("Reng daxil edin:");
 containerEL.style.color=color;
})

background.addEventListener("click", function () {
    let background=prompt("Reng daxil edin:");
    containerEL.style.color=background;
   })

let property;
let key;

   custom.addEventListener("click",function () {
    let property = prompt ("Property daxil edin:");
    let key = prompt (`${property} deyerini daxil edin:`);

    containerEL.style[`${property}`]=key;
   })

   reset.addEventListener("click", function () {
    containerEL.classList.remove("italic")
    containerEL.classList.remove("bold")
    containerEL.style.color="black";
    containerEL.style.backgroundColor="white"
    containerEL.style[`${property}`]=null
   })