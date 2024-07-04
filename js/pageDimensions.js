function updateDimensionsPages() {
    if (window.innerHeight > window.innerWidth) {
        var scrollButton = document.querySelector(".mail-icon");
        var aboutSection = document.getElementById("about");
        var experienceSection = document.getElementById("experience");
        var scrollButtonBottom = scrollButton.offsetTop + scrollButton.offsetHeight;
        aboutSection.style.top = (scrollButtonBottom+100) + "px";
        experienceSection.style.top = (aboutSection.offsetTop + aboutSection.offsetHeight) + "px";
    }
    else {
        var scrollButton = document.querySelector(".mail-icon");
        var aboutSection = document.getElementById("about");
        var experienceSection = document.getElementById("experience");
        var scrollButtonBottom = scrollButton.offsetTop + scrollButton.offsetHeight;
        aboutSection.style.top = (scrollButtonBottom+150) + "px";
        experienceSection.style.top = (aboutSection.offsetTop + aboutSection.offsetHeight) + "px";

    }
}

window.addEventListener("load", updateDimensionsPages);
window.addEventListener("resize", updateDimensionsPages);