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
    const experienceSection = document.getElementById('experience');
    const experienceTitle = document.querySelector('#experience .experience-title');


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
                }, 200); 

                
                observer.unobserve(experienceSection);
            }
        });
    }, observerOptions);

    observer.observe(experienceSection);
});
