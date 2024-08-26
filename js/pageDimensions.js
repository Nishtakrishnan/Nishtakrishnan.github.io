function updateDimensionsPages() {
        var aboutSection = document.getElementById("about");
        var experienceSection = document.getElementById("experience");
        var projectsSection = document.getElementById("projects");
        var contactSection = document.getElementById("contact");
        var footerSection = document.getElementById("footer");
        experienceSection.style.top = (aboutSection.offsetTop + aboutSection.offsetHeight) + "px";
        projectsSection.style.top = (experienceSection.offsetTop + experienceSection.offsetHeight) + "px";
        contactSection.style.top = (projectsSection.offsetTop + projectsSection.offsetHeight) + "px";
        footerSection.style.top = (contactSection.offsetTop + contactSection.offsetHeight) + "px";
    }
    
    window.addEventListener("load", updateDimensionsPages);
    window.addEventListener("resize", updateDimensionsPages);
    
    // Create a MutationObserver to observe changes in the sections
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                updateDimensionsPages();
            }
        }
    });
    
    // Observe changes in the about and experience sections
    const aboutSection = document.getElementById("about");
    const experienceSection = document.getElementById("experience");
    
    observer.observe(aboutSection, { attributes: true, childList: true, subtree: true });
    observer.observe(experienceSection, { attributes: true, childList: true, subtree: true });
    