const buttonNo = document.querySelector(".btn-no");
const buttonYes = document.querySelector(".btn-yes");
const container = document.querySelector(".container");
const image = document.querySelector(".image");

let count = 0;
let flag = false;

function hideKitty(){
    image.style.display = "none";
    count = 0;
    flag = false;
    buttonNo.removeEventListener("click", mushroom);
    document.body.removeEventListener("click", hideKitty); 
    buttonNo.style.top = "";
    buttonNo.style.left = "";    
}
function mushroom(e){
    e.stopPropagation();
    image.style.display = "block";
    image.setAttribute("src", "./images/mushroom.png");
    flag = true;
}
function noWay(){
    if(count >= 4){
        if(!flag){
            image.setAttribute("src", "./images/kitty.png");
        }
        image.style.display = "block";
        buttonNo.addEventListener("click", mushroom);
        document.body.addEventListener("click", hideKitty); 
        
        return;
    }
    const minY = -50; // allow 50px above the container top
    const maxX = (container.clientWidth - buttonNo.offsetWidth);
    const maxY = (container.clientHeight - buttonNo.offsetHeight)-200;

    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(minY + Math.random() * (maxY - minY + 1));

    buttonNo.style.top = randomY + "px";
    buttonNo.style.left = randomX + "px";
    count++;
}
function yes(){
    image.style.display = "block";
    image.setAttribute("src", "./images/shyKitty.png");
    buttonNo.style.display = "none";
    buttonYes.style.display = "none";
    document.querySelector(".question").style.display = "none";
}
buttonNo.addEventListener("mouseover", noWay);
buttonYes.addEventListener("click", yes);
