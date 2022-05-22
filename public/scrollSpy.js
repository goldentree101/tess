const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

//scrollspy activates on scroll of window

//if the top of the window has scrolled past at least 
//half of the next section, the active link becomes 
//that next section. 

window.addEventListener("scroll", function () {
    for (let i = 0; i < sections.length; i++) {
        //Error with math comparison.. should be >= sections.length-1
        const sectionIndexForHeightCalc = i <= sections.length ? i : i + 1;
        if (window.scrollY > sections[i].offsetTop - sections[sectionIndexForHeightCalc].clientHeight / 2) {
            links.forEach(link => { link.classList.remove("active") });
            links[i].classList.add("active");
        }

    }
});