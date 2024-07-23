function updateDimensionsPages() {
        var aboutSection = document.getElementById("about");
        var experienceSection = document.getElementById("experience");
        var projectsSection = document.getElementById("projects");
        experienceSection.style.top = (aboutSection.offsetTop + aboutSection.offsetHeight) + "px";
        projectsSection.style.top = (experienceSection.offsetTop + experienceSection.offsetHeight) + "px";
}

window.addEventListener("load", updateDimensionsPages);
window.addEventListener("resize", updateDimensionsPages);