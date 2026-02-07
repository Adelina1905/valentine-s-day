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
    const buttonWidth = buttonNo.offsetWidth;
    const buttonHeight = buttonNo.offsetHeight;    

    const containerWidth = container.offsetWidth - buttonWidth;
    const containerHeight = container.offsetHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));

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
