
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



document.getElementById("toggle-btn").addEventListener("click", function () {
    let body = document.body;
    let navbar = document.querySelector(".navbar");
    let footer = document.querySelector("footer");
    let dayIcon = document.getElementById("day-icon");
    let nightIcon = document.getElementById("night-icon");

    if (body.classList.contains("day-mode")) {
        body.classList.remove("day-mode");
        body.classList.add("night-mode");
        
        navbar.classList.remove("day-mode", "bg-body-tertiary");
        navbar.classList.add("night-mode", "bg-black"); 

        footer.classList.remove("day-mode");
        footer.classList.add("night-mode");
        dayIcon.style.display = "none";
        nightIcon.style.display = "inline";

    } else {
        body.classList.remove("night-mode");
        body.classList.add("day-mode");
        
        navbar.classList.remove("night-mode", "bg-black");
        navbar.classList.add("day-mode", "bg-body-tertiary");

        footer.classList.remove("night-mode");
        footer.classList.add("day-mode");
        dayIcon.style.display = "inline";
        nightIcon.style.display = "none";

    }
});






