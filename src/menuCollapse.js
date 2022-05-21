const navItems = document.querySelectorAll(".nav-item");
const toggler = document.querySelector(".navbar-toggler")
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        if(document.body.clientWidth < 992){
            setTimeout(()=>{
                toggler.click();
            }, 700)
        }
    })
})
