// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Product Image Resizing
document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.style.width = '100%';
    img.style.maxWidth = '250px';
});
