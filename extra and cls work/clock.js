
// let nowDate = new Date();
// const box0= nowDate.getFullYear();
// const box2= nowDate.getMonth();
// const box3= nowDate.getDay();
// const box4= nowDate.getHours();
// const box5= nowDate.getSeconds();

// document.querySelector(".box0").innerHTML = box0;
// document.querySelector(".box2").innerHTML = box2;
// document.querySelector(".box3").innerHTML = box3;
// document.querySelector(".box4").innerHTML = box4;
// document.querySelector(".box5").innerHTML = box5;
 
function roll(){
    let theImg = document.querySelector(".images")
    // var v=document.querySelectorAll(".images")
    let theNumber = Math.trunc(Math.random()*6+1);
    theImg.src=`dice-${theNumber}.png`
    document.querySelector(".number").innerHTML = theNumber;
}