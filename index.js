
function myFunction(){
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
