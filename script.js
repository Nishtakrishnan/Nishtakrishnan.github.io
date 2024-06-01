function updateDimensions() {
    var sideblock = document.querySelector(".sideblock");
    var mailIcon = document.querySelector(".mail-icon");
    var gitIcon = document.querySelector(".github-icon");
    var linkIcon = document.querySelector(".linkedin-icon");

    var sideblockBottom = sideblock.getBoundingClientRect().bottom;

    mailIcon.style.top = (sideblockBottom-20) + "px";
    mailIcon.style.left = 10 + "vw"
    mailIcon.style.width = 3 + "vw"

    gitIcon.style.top = (sideblockBottom-20) + "px";
    gitIcon.style.left = 16 + "vw"
    gitIcon.style.width = 3 + "vw"

    linkIcon.style.top = (sideblockBottom-20) + "px";
    linkIcon.style.left = 22 + "vw"
    linkIcon.style.width = 3 + "vw"
}

window.addEventListener("load", updateDimensions);
window.addEventListener("resize", updateDimensions);

function updateStylesForPhone() {
    if (window.matchMedia("(max-width: 480px)").matches) {
        var mailIcon = document.querySelector(".mail-icon");
        var gitIcon = document.querySelector(".github-icon");
        var linkedinIcon = document.querySelector(".linkedin-icon");
        var sideblock = document.querySelector(".sideblock");
        var sideblockBottom = sideblock.getBoundingClientRect().bottom;

        mailIcon.style.top = (sideblockBottom+20) + "px";
        mailIcon.style.left = 22 + "vw"
        mailIcon.style.width = 12 + "vw"

        gitIcon.style.top = (sideblockBottom+20) + "px";
        gitIcon.style.left = 42 + "vw"
        gitIcon.style.width = 12 + "vw"

        linkedinIcon.style.top = (sideblockBottom+20) + "px";
        linkedinIcon.style.left = 62 + "vw"
        linkedinIcon.style.width = 12 + "vw"

    }
}

window.addEventListener("load", updateStylesForPhone);
window.addEventListener("resize", updateStylesForPhone);

document.addEventListener('DOMContentLoaded', function() {
    // Function to set the active link
    function setActiveLink() {
        var sections = document.querySelectorAll('.page');
        var links = document.querySelectorAll('.navbar ul li a');
        
        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                links.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});