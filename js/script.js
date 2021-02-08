        var typed = new Typed(".typing", {
        strings: ["Web Developer", "Web Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

        document.getElementById("open-popup-btn").addEventListener("click",function(){
        	document.getElementsByClassName("popup")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
        	document.getElementsByClassName("popup")[0].classList.remove("active");
        });

     mediumZoom('.zoom', {
        margin:50,
        background: '#fff'
     });   