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
        });
    });
});



function showNextSlide() {
    const currentSlide = document.querySelector('.stroke-text').innerText;
    const video = document.querySelector('.placeranker-video');
    const githubButton = document.querySelector('.github-button');
    
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
    }
}

function showPreviousSlide() {
    const currentSlide = document.querySelector('.stroke-text').innerText;
    const video = document.querySelector('.placeranker-video');
    const githubButton = document.querySelector('.github-button-traveling-salesman');
    
    if (currentSlide === 'Traveling Salesman') {
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


