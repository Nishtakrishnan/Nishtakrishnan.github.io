function updateDimensions() {
    var sideblock = document.querySelector(".sideblock");
    var mailIcon = document.querySelector(".mail-icon");
    var gitIcon = document.querySelector(".github-icon");
    var linkIcon = document.querySelector(".linkedin-icon");

    var sideblockTop = sideblock.offsetTop;

    mailIcon.style.top = (sideblockTop + sideblock.offsetHeight-3) + "px";
    mailIcon.style.left = 10 + "vw"
    mailIcon.style.width = 3 + "vw"

    gitIcon.style.top = (sideblockTop + sideblock.offsetHeight -3) + "px";
    gitIcon.style.left = 16 + "vw"
    gitIcon.style.width = 3 + "vw"

    linkIcon.style.top = (sideblockTop + sideblock.offsetHeight -3) + "px";
    linkIcon.style.left = 22 + "vw"
    linkIcon.style.width = 3 + "vw"
}

window.addEventListener("load", updateDimensions);
window.addEventListener("resize", updateDimensions);

function updateStylesForPhone() {
    if (window.innerHeight > window.innerWidth) {
        var mailIcon = document.querySelector(".mail-icon");
        var gitIcon = document.querySelector(".github-icon");
        var linkedinIcon = document.querySelector(".linkedin-icon");
        var sideblock = document.querySelector(".sideblock");
        var sideblockTop = sideblock.offsetTop;

        mailIcon.style.top = (sideblockTop + sideblock.offsetHeight + 22) + "px";
        mailIcon.style.left = 30 + "vw"
        mailIcon.style.width = 8 + "vw"

        gitIcon.style.top = (sideblockTop + sideblock.offsetHeight + 22) + "px";
        gitIcon.style.left = 46 + "vw"
        gitIcon.style.width = 8 + "vw"

        linkedinIcon.style.top = (sideblockTop + sideblock.offsetHeight + 22) + "px";
        linkedinIcon.style.left = 62 + "vw"
        linkedinIcon.style.width = 8 + "vw"

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