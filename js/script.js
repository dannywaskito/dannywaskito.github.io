// Typing
        var typed = new Typed(".typing", {
        strings: ["Web Developer", "Web Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
// End Typing
// Menu Hambuger
        document.getElementById("open-popup-btn").addEventListener("click",function(){
        	document.getElementsByClassName("popup")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
        	document.getElementsByClassName("popup")[0].classList.remove("active");
        });
// End Menu Hambuger
// loading Web
let fadeTarget = document.querySelector(".loading")
function show_loading(){
    fadeTarget.style.display = "block";
}
function hide_loading(){
    // fadeTarget.style.display = "none";
    let fadeEffect = setInterval(() => {
        if(!fadeTarget.style.opacity){
            fadeTarget.style.opacity = 1;
        }
        if(fadeTarget.style.opacity > 0){
            fadeTarget.style.opacity -= 0.1;
        }else{
            clearInterval(fadeEffect)
            fadeTarget.style.display = "none"
        }
    },100)
}

// End LoadingWeb
// Zoom Gambar
     mediumZoom('.zoom', {
        margin:50,
        background: '#fff'
     });   
// End Zoom Gambar
