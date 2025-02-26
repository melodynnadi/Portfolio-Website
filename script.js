document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelector('.project-cards');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    // Make sure z-index is properly set
    document.querySelectorAll('.carousel-arrow').forEach(arrow => {
        arrow.style.zIndex = "100";
    });
    
    // Ensure proper event binding
    prevArrow.addEventListener('click', function(e) {
        e.preventDefault();
        const cardWidth = document.querySelector('.project-card').offsetWidth + 30;
        projectCards.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });
    
    nextArrow.addEventListener('click', function(e) {
        e.preventDefault();
        const cardWidth = document.querySelector('.project-card').offsetWidth + 30;
        projectCards.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
});
