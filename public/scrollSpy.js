
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

const nav = document.querySelector(".navbar > .container-fluid");

//SCROLLSPY
//if the top of the window has scrolled past at least 
//half of the next section, the active link becomes 
//that next section. 

window.addEventListener("scroll", function () {
    //SCROLLSPY
    for (let i = 0; i < sections.length; i++) {
        if (window.scrollY > sections[i].offsetTop - sections[i <= sections.length-1 ? i : i + 1].clientHeight / 2) {
            links.forEach(link => { link.classList.remove("active") });
            links[i].classList.add("active");
        }
    }

    // //Vertical padding reduction on scroll
    // if(window.scrollY > 0){
    //     nav.classList.remove("py-3");
    // }else{
    //     nav.classList.add("py-3");
    // }
});


//