var bars = document.querySelector("#bars")
var cross = document.querySelector("#cross")
var sidemenu = document.querySelector(".sidemenu")

bars.addEventListener("click", () => {
    sidemenu.setAttribute("id", "active");
})

cross.addEventListener("click", () => {
    sidemenu.removeAttribute("id", "active")
})



// display navLinks on screen grow
window.addEventListener("resize", function() {
    var width = screen.width;
    // console.log(width);
    if (width > 860) {
        sidemenu.removeAttribute("id", "active")
    }
}, true);

// profile links active

const logoBx = document.querySelector(".logoBx");
console.log(logoBx);
logoBx.addEventListener("click", () => {
    const profilelinks = document.querySelector(".profileLinks");
    profilelinks.classList.toggle("active")

})