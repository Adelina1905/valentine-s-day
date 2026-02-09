const buttonNo = document.querySelector(".btn-no");
const buttonYes = document.querySelector(".btn-yes");
const container = document.querySelector(".container");
const image = document.querySelector(".image");
const errorPage = document.querySelector(".error")
let count = 0;
let freezeNo = false;
function hideKitty(){
    image.style.display = "none";
    freezeNo = false;  
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
function autoKill(){
    setTimeout(() => {
        container.style.display = "none";
        errorPage.style.display = "block"
    }, 2000);
}
function showCat(src){
    image.setAttribute("src", `./images/${src}`);
    image.style.display = "block";
    freezeNo = true;
    buttonNo.addEventListener("click", mushroom);
    document.body.addEventListener("click", hideKitty); 
}
function noWay(){
    if (freezeNo) return; 
    switch(count){
        case 5:
            showCat("huh.png")
            count++;
            return;
        case 8:
            showCat("kitty.png");
            count++;
            return;
        case 10:
            showCat("mushroom.png");    
            count++;
            return;
        case 12:
            showCat("nooo.png"); 
            autoKill();
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

function celebration(){
    for(let i = 0; i< 3; i++){
        setTimeout(()=>{
            image.setAttribute("src", `./images/kissing${i}.png`);
        }, i*1000)
    }
}

function yes(){
    image.style.display = "block";
    image.setAttribute("src", "./images/shyKitty.png");
    buttonNo.style.display = "none";
    buttonYes.style.display = "none";
    document.querySelector(".question").style.display = "none";
    setTimeout(()=>{
        celebration();
    }, 1500);
}
buttonNo.addEventListener("mouseover", noWay);
buttonYes.addEventListener("click", yes);
