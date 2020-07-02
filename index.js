
let count = 0;
let played = false;
function reset() {
    if(played){
        document.querySelector(".box1 img").setAttribute("src","img/1.jpg");
        document.querySelector(".box1 img").style.border = "0px solid transparent";
        document.querySelector(".box1 img").classList.toggle("green");
        document.querySelector(".box1 img").classList.toggle("onHover");


        document.querySelector(".box2 img").setAttribute("src","img/2.jpg");
        document.querySelector(".box2 img").classList.add("onHover");
        
        document.querySelector(".box3 img").setAttribute("src","img/3.jpg");
        document.querySelector(".box3 img").style.border = "0px solid transparent";
        document.querySelector(".box3 img").classList.toggle("red");
        document.querySelector(".box3 img").classList.toggle("onHover");
        
        played = false;
    }
}

function play(yourChoice) {
    if(!played){
        played = true;
        let oppChoice = opponent();
        document.querySelector(".box1 img").setAttribute("src","img/"+yourChoice+".jpg");
        document.querySelector(".box1 img").style.border = "3px solid green"; 
        document.querySelector(".box1 img").classList.toggle("green");
        document.querySelector(".box1 img").classList.remove("onHover");

        document.querySelector(".box2 img").classList.remove("onHover");

        document.querySelector(".box3 img").setAttribute("src","img/"+oppChoice+".jpg");
        document.querySelector(".box3 img").style.border = "3px solid red";
        document.querySelector(".box3 img").classList.toggle("red");
        document.querySelector(".box3 img").classList.toggle("onHover");

        if(yourChoice === oppChoice) {
            document.querySelector(".box2 img").setAttribute("src","img/tie.png");
        } 
        else if(yourChoice === 1){
            if(oppChoice === 3){
                document.querySelector(".box2 img").setAttribute("src","img/you-win.jpg");
            } else {
                document.querySelector(".box2 img").setAttribute("src","img/you-lost.jpg");
            }
        } 
        else if(yourChoice === 2) {
            if(oppChoice === 1){
                document.querySelector(".box2 img").setAttribute("src","img/you-win.jpg");
            } else {
                document.querySelector(".box2 img").setAttribute("src","img/you-lost.jpg");
            }
        }
        else if(yourChoice === 3){
            if(oppChoice === 2){
                document.querySelector(".box2 img").setAttribute("src","img/you-win.jpg");
            } else {
                document.querySelector(".box2 img").setAttribute("src","img/you-lost.jpg");
            }
        }
    }
    
}

function opponent() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}