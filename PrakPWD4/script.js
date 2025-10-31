const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
});

toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
