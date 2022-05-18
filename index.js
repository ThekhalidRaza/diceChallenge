// left dice
var randomNumber1=Math.floor(Math.random()*6+1);

var img1= "/images/dice" +randomNumber1+(".png");

document.querySelectorAll("img")[0].setAttribute("src",img1);

// right dice
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImg2="/images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerText="🚩 Player 1 is winner"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText="Player 2 is winner 🚩"
}
else{
    document.querySelector("h1").innerText="Match is draw"
}