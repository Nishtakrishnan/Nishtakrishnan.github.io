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