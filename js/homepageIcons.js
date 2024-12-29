document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = document.getElementById('welcome-text');
    const leftText2 = document.querySelector('.left-text-2');
    const icons = document.querySelectorAll('.icon a');

    // Typing effect function
    function typeEffect(element, text, delay = 100) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index); // Use innerHTML to handle HTML tags like <br>
                index++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    function startTypingAnimation() {
        // Reset text content and visibility
        welcomeText.innerHTML = ''; // Reset welcome text content
        document.querySelector('.intro-text').style.visibility = 'visible';
        leftText2.classList.remove('visible'); // Ensure .left-text-2 is hidden initially

        // Start typing animation with "Hello," and "Welcome to my Website!"
        const lines = ['Hello,', 'Welcome to my website!'];
        let currentLine = 0;

        function typeNextLine() {
            if (currentLine < lines.length) {
                typeEffect(welcomeText, lines[currentLine], 100);
                currentLine++;
                // Add a line break after the first line before typing the next one
                if (currentLine === 1) {
                    setTimeout(() => {
                        welcomeText.innerHTML += '<br/>'; // Add line break after the first line
                        typeNextLine(); // Start typing the second line
                    }, lines[currentLine - 1].length * 100 + 500);
                } else {
                    setTimeout(typeNextLine, lines[currentLine - 1].length * 100 + 500); // Add delay between lines
                }
            } else {
                // Show .left-text-2 after typing animation is done
                setTimeout(() => {
                    leftText2.classList.add('visible');

                    // Show icons one by one
                    icons.forEach((icon, index) => {
                        setTimeout(() => {
                            icon.classList.add('visible');
                        }, index * 500);
                    });
                }, 500);
            }
        }

        // Add a 10-second delay before starting the typing animation
        setTimeout(() => {
            typeNextLine(); // Start typing the first line
        }, 10000);  // 10000ms = 10 seconds
    }

    startTypingAnimation();
});



function updateStylesForPhone() {
    if (window.innerHeight > window.innerWidth) {
        var mailIcon = document.querySelector(".mail-icon");
        var gitIcon = document.querySelector(".github-icon");
        var linkedinIcon = document.querySelector(".linkedin-icon");
        var sideblock = document.querySelector(".left-text");
        var sideblockTop = sideblock.offsetTop;

        mailIcon.style.top = (sideblockTop + sideblock.offsetHeight + 10) + "px";
        mailIcon.style.left = 30 + "vw"
        mailIcon.style.width = 8 + "vw"

        gitIcon.style.top = (sideblockTop + sideblock.offsetHeight + 10) + "px";
        gitIcon.style.left = 46 + "vw"
        gitIcon.style.width = 8 + "vw"

        linkedinIcon.style.top = (sideblockTop + sideblock.offsetHeight + 10) + "px";
        linkedinIcon.style.left = 62 + "vw"
        linkedinIcon.style.width = 8 + "vw"

    }
}

window.addEventListener("load", updateStylesForPhone);
window.addEventListener("resize", updateStylesForPhone);

