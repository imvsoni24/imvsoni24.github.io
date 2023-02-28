document.getElementById("css").style.display = "none";
document.getElementById("js").style.display = "none";
document.getElementById("react").style.display = "none";
document.getElementById("redux").style.display = "none";
document.getElementById("ts").style.display = "none";
document.getElementById("next").style.display = "none";
document.getElementById("chakra").style.display = "none";
document.getElementById("hello").style.display = "none";


setTimeout(function(){ 
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "block";
}, 500);
setTimeout(function(){ 
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "block";
}, 1000);
setTimeout(function(){ 
  document.getElementById("js").style.display = "none";
  document.getElementById("react").style.display = "block";
}, 1500);
setTimeout(function(){ 
  document.getElementById("react").style.display = "none";
  document.getElementById("redux").style.display = "block";
}, 2000);
setTimeout(function(){ 
  document.getElementById("redux").style.display = "none";
  document.getElementById("ts").style.display = "block";
}, 2500);
setTimeout(function(){ 
  document.getElementById("ts").style.display = "none";
  document.getElementById("next").style.display = "block";
}, 3000);
setTimeout(function(){ 
  document.getElementById("next").style.display = "none";
  document.getElementById("chakra").style.display = "block";
}, 3500);
setTimeout(() => {
  document.getElementById("media").style = "none";
}, 4000)
setTimeout(function(){
  document.getElementById("chakra").style.display = "none";
  document.getElementById("hello").style.display = "block";
}, 4000);


function toggleDiv() {
  var div = document.getElementById("mainnav");
  div.style.display = div.style.display == "none" ? "block" : "none";
}


//  var typed = new Typed(".typing", {
//     strings: ["Full Stack Web Developer trained by Masai School."],
//     typeSpeed: 50,
//     backSpeed: 60,
//     loop: true
// });

// var typed = new Typed(".typing-2", {
//     strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });
function resume(){
    
    window.open("https://drive.google.com/file/d/1Is4NFOIM0cyZHtIuye69FauFuGpzn48X/view?usp=share_link")
}
function w(){
    window.open("https://wa.me/6386315908")
  }
  function redirect3(){
    window.open("https://www.linkedin.com/in/vivek-soni-1269a2210/")
  }
  function redirect2(){
    window.open("https://github.com/imvsoni24")
  }
  function phone(){
    window.open("tel:+91-6386315908")
  }
  function email(){
    window.location.href=("mailto:imvsoni24@gmail.com")
  }
  function mode1(){
    window.open("https://becharmed.vercel.app/");
  
  }
  function mode2(){
    window.open("https://github.com/imvsoni24/fit-base-1108")
  }
  function amazon1(){
    window.open("https://apna-mart.vercel.app/")
  }
  function amazon2(){
    window.open("https://github.com/atuls2060/flaky-teaching-4774")
  }
function bebo1(){
  window.open("https://master--iridescent-gingersnap-92932a.netlify.app/index.html")
}
function bebo2(){
  window.open("https://github.com/Harit2002/-puny-corn-6420")
}
function book1(){
  window.open("https://trendy-mart.vercel.app/");
}
function book2(){
  window.open("https://github.com/UMAR44641/TrendyMart");
}

// GitHubCalendar(".calendar", "your-username");

    // or enable responsive functionality:
   

    function sendMail(){
      var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        phone_number: document.getElementById("phone").value,
        message : document.getElementById("message").value,
      }
      emailjs.send("service_4qa6ecs","template_xu8nc0m",params).then(function (res){
        alert("Success!" + res.status);
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        document.getElementById("message").value="";
      })
        
    }