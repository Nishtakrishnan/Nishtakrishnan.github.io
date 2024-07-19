function updateDimensionsPages() {
    if (window.innerHeight > window.innerWidth) {
        var aboutSection = document.getElementById("about");
        var experienceSection = document.getElementById("experience");
        experienceSection.style.top = (aboutSection.offsetTop + aboutSection.offsetHeight) + "px";
    }
    else {
        var aboutSection = document.getElementById("about");
        var experienceSection = document.getElementById("experience");
        experienceSection.style.top = (aboutSection.offsetTop + aboutSection.offsetHeight) + "px";
    }
}

window.addEventListener("load", updateDimensionsPages);
window.addEventListener("resize", updateDimensionsPages);