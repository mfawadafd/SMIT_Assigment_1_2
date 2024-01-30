document.getElementById('btnred').onclick =function(){
  document.getElementById('body').style.backgroundColor ='red'
}
document.getElementById('btnyellow').onclick =function(){
  document.getElementById('body').style.backgroundColor ='yellow'
}
document.getElementById('rest').onclick =function(){
  document.getElementById('body').style.backgroundColor ='transparent'
}

document.getElementById('on').onclick = function(){
  document.getElementById('blub').src = "https://www.w3schools.com/js/pic_bulbon.gif"
  document.getElementById('body').style.backgroundColor = "transparent"
  document.getElementById('heading1').innerHTML ="light On"
  document.getElementById('heading1').style.color = "black"
}
document.getElementById('off').onclick = function(){
  document.getElementById('blub').src = "https://www.w3schools.com/js/pic_bulboff.gif"
  document.getElementById('body').style.backgroundColor = "black"
  document.getElementById('heading1').innerHTML ="light Off"
  document.getElementById('heading1').style.color = "white"
}
