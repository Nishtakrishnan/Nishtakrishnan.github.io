function updateDimensions() {
    var sideblock = document.querySelector(".sideblock");
    var mailIcon = document.querySelector(".mail-icon");
    var gitIcon = document.querySelector(".github-icon");
    var linkIcon = document.querySelector(".linkedin-icon");
    var aboutMe = document.querySelector(".scroll-button")

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

    aboutMe.style.top = (sideblockTop + sideblock.offsetHeight+110) + "px";
}

window.addEventListener("load", updateDimensions);
window.addEventListener("resize", updateDimensions);

function updateStylesForPhone() {
    if (window.innerHeight > window.innerWidth) {
        var mailIcon = document.querySelector(".mail-icon");
        var gitIcon = document.querySelector(".github-icon");
        var linkedinIcon = document.querySelector(".linkedin-icon");
        var sideblock = document.querySelector(".left-text");
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

function updateDimensionsPages() {
    if (window.innerHeight > window.innerWidth) {
        var scrollButton = document.querySelector(".mail-icon");
        var aboutSection = document.getElementById("about");
        var scrollButtonBottom = scrollButton.offsetTop + scrollButton.offsetHeight;
        aboutSection.style.top = (scrollButtonBottom+100) + "px";
    }
    else {
        var scrollButton = document.querySelector(".mail-icon");
        var aboutSection = document.getElementById("about");
        var scrollButtonBottom = scrollButton.offsetTop + scrollButton.offsetHeight;
        aboutSection.style.top = (scrollButtonBottom+150) + "px";

    }
}

window.addEventListener("load", updateDimensionsPages);
window.addEventListener("resize", updateDimensionsPages);


window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var sections = document.querySelectorAll('.page');
    var viewportHeight = window.innerHeight;

    sections.forEach(function(section) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        var middle = (top + bottom) / 2;
        var link = document.querySelector('a[href="#' + section.id + '"]');

        // Check if the middle of the section is within the viewport
        if (scrollPos < bottom - viewportHeight / 2 && scrollPos + viewportHeight / 2 > top) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});