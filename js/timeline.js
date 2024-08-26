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
    if (currentSlide === 'Placeranker') {
        document.querySelector('.stroke-text').innerText = 'Traveling Salesman';
        document.querySelector('.left-arrow').style.display = 'block';
        document.querySelector('.right-arrow').style.display = 'none';
    }
}

function showPreviousSlide() {
    const currentSlide = document.querySelector('.stroke-text').innerText;
    if (currentSlide === 'Traveling Salesman') {
        document.querySelector('.stroke-text').innerText = 'Placeranker';
        document.querySelector('.left-arrow').style.display = 'none';
        document.querySelector('.right-arrow').style.display = 'block';
    }
}

