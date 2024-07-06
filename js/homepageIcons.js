document.addEventListener('DOMContentLoaded', () => {
    const introDriven = document.getElementById('intro-driven');
    const introTech = document.getElementById('intro-tech');
    const introFueled = document.getElementById('intro-fueled');
    const introCuriosity = document.getElementById('intro-curiosity');
    const leftText2 = document.querySelector('.left-text-2');
    const icons = document.querySelectorAll('.icon a');

    // Typing effect function
    function typeEffect(element, text, delay = 100) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    function startTypingAnimation() {
        // Reset text content and visibility
        introDriven.textContent = '';
        introTech.textContent = '';
        introFueled.textContent = '';
        introCuriosity.textContent = '';
        document.querySelector('.intro-text').style.visibility = 'visible';
        leftText2.classList.remove('visible'); // Ensure .left-text-2 is hidden initially

        // Start typing animation
        setTimeout(() => {
            typeEffect(introDriven, 'Driven by ', 100);
            setTimeout(() => {
                typeEffect(introTech, 'Technology', 100);
                setTimeout(() => {
                    typeEffect(introFueled, 'Fueled by ', 100);
                    setTimeout(() => {
                        typeEffect(introCuriosity, 'Curiosity', 100);
                        // Show .left-text-2 after the intro text is done
                        setTimeout(() => {
                            leftText2.classList.add('visible');

                            // Show icons one by one
                            icons.forEach((icon, index) => {
                                setTimeout(() => {
                                    icon.classList.add('visible');
                                }, index * 500); // Adjust delay between icons as needed
                            });
                        }, 'Curiosity'.length * 100 + 500); // Adjust delay to match the end of typing animation
                    }, 'Fueled by '.length * 100);
                }, 'Technology'.length * 100 + 500);
            }, 'Driven by '.length * 100);
        }, 11000); // Adjust initial delay as needed
    }

    // Start typing animation on page load
    startTypingAnimation();
});



function updateDimensions() {
    var sideblock = document.querySelector(".left-text");
    var mailIcon = document.querySelector(".mail-icon");
    var gitIcon = document.querySelector(".github-icon");
    var linkIcon = document.querySelector(".linkedin-icon");

    var sideblockTop = sideblock.offsetTop;

    mailIcon.style.top = (sideblockTop + sideblock.offsetHeight+35) + "px";
    mailIcon.style.left = 80 + "px"
    mailIcon.style.width = 50 + "px"

    gitIcon.style.top = (sideblockTop + sideblock.offsetHeight +35) + "px";
    gitIcon.style.left = 180 + "px"
    gitIcon.style.width = 50 + "px"

    linkIcon.style.top = (sideblockTop + sideblock.offsetHeight +35) + "px";
    linkIcon.style.left = 280 + "px"
    linkIcon.style.width = 50 + "px"
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

