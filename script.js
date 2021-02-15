window.addEventListener("DOMContentLoaded", () => {
    const panel = document.querySelectorAll(".panel");

    panel.forEach(value => value.addEventListener("click", () => {
        value.classList.toggle("active");
        value.classList.toggle("transform-anim");
    }));


});