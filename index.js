let icon = document.getElementById("toggle")
let img = document.getElementById("myimg");
let logo = document.getElementById("logo");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
     img.src="https://i.ibb.co/2gbYNQr/My-project-1-3.png"
     logo.src="https://i.ibb.co/9GQDmPW/V-1.gif"
    }else{
        img.src = "https://i.ibb.co/PjnrNb1/My-project-1-2.png"
        logo.src = "https://i.ibb.co/T0CWy8h/V.gif"
    }
}


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("app2");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function my(){
        window.location.href = "https://drive.google.com/uc?id=1Is4NFOIM0cyZHtIuye69FauFuGpzn48X&export=download",
        window.open("https://drive.google.com/file/d/1Is4NFOIM0cyZHtIuye69FauFuGpzn48X/view?usp=share_link")
}
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function redirect(){
    window.open("https://www.linkedin.com/in/vivek-soni-1269a2210/")
  }
  function redirect2(){
    window.open("https://github.com/imvsoni24")
  }
  function a(){
    window.open("https://wa.me/6386315908")
  }
  function phone(){
    window.open("tel:+91-6386315908")
  }
  function email(){
    window.location.href=("mailto:imvsoni24@gmail.com")
  }