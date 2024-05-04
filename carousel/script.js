const carousel1 = document.querySelector(".carousel-inner .carousel-item:nth-child(1)");
const carousel2 = document.querySelector(".carousel-inner .carousel-item:nth-child(2)");
const carousel3 = document.querySelector(".carousel-inner .carousel-item:nth-child(3)");
const btn = document.querySelector(".carousel-control-next");
const btn2 = document.querySelector(".carousel-control-prev");




btn.addEventListener("click",() => {
    if (carousel1.classList[1] == "active"){
        carousel1.classList.toggle("active")
        carousel2.classList.toggle("active")
    }
    else if(carousel2.classList[1] == "active"){
        carousel2.classList.toggle("active")
        carousel3.classList.toggle("active")
    }
    else {
        carousel1.classList.toggle("active")
        carousel3.classList.toggle("active")
    }
})






btn2.addEventListener("click",() => {
    if (carousel2.classList[1] == "active"){
        carousel1.classList.toggle("active")
        carousel2.classList.toggle("active")
    }
    else if(carousel3.classList[1] == "active"){
        carousel2.classList.toggle("active")
        carousel3.classList.toggle("active")
    }
    else {
        carousel1.classList.toggle("active")
        carousel3.classList.toggle("active")
    }
})