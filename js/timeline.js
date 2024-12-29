document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-more').forEach(readMoreLink => {
        readMoreLink.addEventListener('click', function () {
            const timelineMoreContent = this.nextElementSibling;
            timelineMoreContent.style.display = 'block';
            this.style.display = 'none';
        });
    });

    document.querySelectorAll('.read-less').forEach(readLessLink => {
        readLessLink.addEventListener('click', function () {
            const timelineMoreContent = this.parentElement;
            timelineMoreContent.style.display = 'none';
            timelineMoreContent.previousElementSibling.style.display = 'block';

            // Scroll to the .education-title element, 10px above
            const element = document.querySelector(".education-title");
            if (element) {
                const rect = element.getBoundingClientRect();
                const scrollPosition = window.pageYOffset + rect.top - 50; // 10px offset above the element
                window.scrollTo({
                    top: scrollPosition,
                });
            } else {
                console.log("Element with class 'education-title' not found.");
            }
        });
    });
});




function showNextSlide() {
    const currentSlide = document.querySelector('.stroke-text').innerText;
    const video = document.querySelector('.placeranker-video');
    const githubButton = document.querySelector('.github-button');
    const description = document.querySelector('.project-description-traveling')
    const meme = document.querySelector('.tsp-meme')
    
    if (currentSlide === 'Placeranker') {
        document.querySelector('.stroke-text').innerText = 'Traveling Salesman';
        document.querySelector('.left-arrow').style.display = 'block';
        document.querySelector('.right-arrow').style.display = 'none';
        document.querySelector('.grey-rectangle').style.display = 'none';
        document.querySelector('.project-description').style.display = 'none';
        document.querySelector('.tech-stack').style.display = 'none';
        video.style.display = 'none';
        githubButton.classList.remove('github-button');
        githubButton.classList.add('github-button-traveling-salesman');
        githubButton.href = 'https://github.com/Nishtakrishnan/TravelingSalesman';
        githubButton.style.display = 'block';
        description.innerText = "This project addresses the NP-hard Traveling Salesman Problem (TSP), which seeks the shortest route to visit a set of cities and return to the origin. My solution implements key algorithms, including Christofides' Algorithm, Kruskal's algorithm, and Eulerian paths, which traverse every edge of a minimum spanning tree exactly once. Using the OpenFlights dataset and C++, the project successfully finds the shortest path through a set of desired cities in optimized time.";
        description.style.display = 'block'; // Ensure it's visible
        meme.style.display = 'block'
    }
}

function showPreviousSlide() {
    const currentSlide = document.querySelector('.stroke-text').innerText;
    const video = document.querySelector('.placeranker-video');
    const githubButton = document.querySelector('.github-button-traveling-salesman');
    const description = document.querySelector('.project-description-traveling')
    const meme = document.querySelector('.tsp-meme')
    
    if (currentSlide === 'Traveling Salesman') {
        description.style.display = 'none';
        meme.style.display = 'none'
        document.querySelector('.stroke-text').innerText = 'Placeranker';
        document.querySelector('.left-arrow').style.display = 'none';
        document.querySelector('.right-arrow').style.display = 'block';
        document.querySelector('.grey-rectangle').style.display = 'block';
        document.querySelector('.project-description').style.display = 'block';
        document.querySelector('.tech-stack').style.display = 'block';
        video.style.display = 'block'; 
        githubButton.classList.remove('github-button-traveling-salesman');
        githubButton.classList.add('github-button');
        githubButton.href = 'https://github.com/Nishtakrishnan/Placeranker';
        githubButton.style.display = 'block';
    }
}