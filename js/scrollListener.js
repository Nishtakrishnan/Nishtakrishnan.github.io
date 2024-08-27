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


document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('#experience .circle');
    const ftiCircle = document.querySelector('.fti-circle');
    const illinoisCircle = document.querySelector('.illinois-circle');
    const valleyCircle = document.querySelector('.valley-circle');
    const nuwareCircle = document.querySelector('.nuware-circle');
    const muCircle = document.querySelector('.mu-circle');
    const awaazCircle = document.querySelector('.awaaz-circle');
    const experienceSection = document.getElementById('experience');
    const experienceTitle = document.querySelector('#experience .experience-title');
    const blackStrip = document.querySelector('.black-strip');
    const closeButton = document.querySelector('.close-btn');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    experienceTitle.classList.add('fade-in');

                    // Fade in the circles after the title animation completes
                    setTimeout(() => {
                        circles.forEach((circle, index) => {
                            setTimeout(() => {
                                circle.classList.add('fade-in');
                            }, index * 800); // Delay each circle by 800ms
                        });
                    }, 1200); // Delay the start of circles animation by 1.2s to ensure title is fully visible

                    const totalCirclesDuration = 1200 + circles.length * 800; // 1200ms delay + 800ms for each circle
                    setTimeout(() => {
                        experienceTitle.classList.remove('fade-in');
                        experienceTitle.classList.add('fade-out');

                        setTimeout(() => {
                            experienceTitle.textContent = "Click to learn more!";
                            experienceTitle.classList.remove('fade-out');
                            experienceTitle.classList.add('fade-in');
                            experienceTitle.classList.add('click-to-learn-more'); // Add the new class
                        }, 1000); // Duration of the fade-out animation
                    }, totalCirclesDuration + 2000); // Wait for all circles to appear and then 5 seconds

                }, 200);
                
                observer.unobserve(experienceSection);
            }
        });
    }, observerOptions);

    observer.observe(experienceSection);

    const handleCircleClick = (circle, experienceName, videoSource = null, imageSource = null) => {
        const circleClone = circle.cloneNode(true);
        circleClone.classList.add('clone');
        circles.forEach(c => {
            if (c !== circle) {
                c.classList.add('hidden');
            }
        });
        experienceTitle.classList.add('hidden');
        circle.classList.add('hidden'); // Hide the original circle
    
        // Add styling to the clone if necessary
        circleClone.classList.add('centered');
        blackStrip.classList.add('active');
    
        const experienceText = blackStrip.querySelector('.experience-name');
        experienceText.textContent = experienceName;

        if (videoSource) {
            const videoElement = document.getElementById('black-strip-video');
            videoElement.src = videoSource;
            videoElement.style.display = 'block'; 
            videoElement.load(); 
        }

        if (imageSource) {
            const imageElement = document.getElementById('black-strip-image');
            imageElement.src = imageSource;
            imageElement.style.display = 'block'; // Show the image
        }
    
        // Move the cloned circle to the black strip
        blackStrip.appendChild(circleClone);
    };
    
    
    
    
    // Example usage with specific experience names
    ftiCircle.addEventListener('click', () => {
        handleCircleClick(ftiCircle, "FTI Experience");
    });

    illinoisCircle.addEventListener('click', () => {
        handleCircleClick(illinoisCircle);
    });

    nuwareCircle.addEventListener('click', () => {
        handleCircleClick(nuwareCircle);
    });

    valleyCircle.addEventListener('click', () => {
        handleCircleClick(valleyCircle, "Valley Experience", null, "images/experiencepage/valley-outreach.png");
    });

    muCircle.addEventListener('click', () => {
        handleCircleClick(muCircle);
    });

    awaazCircle.addEventListener('click', () => {
        handleCircleClick(awaazCircle, "Awaaz", "images/IMG_5951.mov");
    });

    closeButton.addEventListener('click', () => {
        blackStrip.classList.remove('active');

        const videoElement = document.getElementById('black-strip-video');
        if (videoElement) {
            videoElement.pause(); 
            videoElement.currentTime = 0; 
            videoElement.style.display = 'none'; 
        }

        const imageElement = document.getElementById('black-strip-image');
        if (imageElement) {
            imageElement.style.display = 'none';
        }
    
        circles.forEach(circle => {
            circle.classList.remove('hidden');
            
            const clone = blackStrip.querySelector('.clone');
            if (clone) {
                blackStrip.removeChild(clone);
            }
    
            // Ensure the original circle is visible again
            circle.classList.remove('hidden');
        });
    
        experienceTitle.classList.remove('hidden');
    });
    
});