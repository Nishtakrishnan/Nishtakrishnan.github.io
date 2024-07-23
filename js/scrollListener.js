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

                    // Change the title text after all circles have appeared and 5 seconds have passed
                    const totalCirclesDuration = 1200 + circles.length * 800; // 1200ms delay + 800ms for each circle
                    setTimeout(() => {
                        experienceTitle.classList.remove('fade-in');
                        experienceTitle.classList.add('fade-out');

                        // Wait for the fade-out to complete before changing the text
                        setTimeout(() => {
                            experienceTitle.textContent = "Click to learn more";
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

    // Function to handle circle click and show black strip
    const handleCircleClick = (circle) => {
        circles.forEach(c => {
            if (c !== circle) {
                c.classList.add('hidden');
            }
        });
        experienceTitle.classList.add('hidden');
        circle.classList.add('centered');
        blackStrip.classList.add('active');
    };

    // Show black strip and center the clicked circle when a circle is clicked
    ftiCircle.addEventListener('click', () => {
        handleCircleClick(ftiCircle);
    });

    illinoisCircle.addEventListener('click', () => {
        handleCircleClick(illinoisCircle);
    });

    nuwareCircle.addEventListener('click', () => {
        handleCircleClick(nuwareCircle);
    });

    valleyCircle.addEventListener('click', () => {
        handleCircleClick(valleyCircle);
    });

    muCircle.addEventListener('click', () => {
        handleCircleClick(muCircle);
    });

    // Hide black strip and show all circles when the close button is clicked
    closeButton.addEventListener('click', () => {
        blackStrip.classList.remove('active');
        circles.forEach(circle => {
            circle.classList.remove('hidden');
            circle.classList.remove('centered');
        });
        experienceTitle.classList.remove('hidden');
    });
});
