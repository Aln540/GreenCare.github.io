document.querySelectorAll('.copy-text').forEach(element => {
    element.addEventListener('click', function() {
        const textToCopy = this.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Change tooltip text to "Copié!"
            const tooltip = this.querySelector('.tooltip');
            tooltip.textContent = 'Copié!';
            this.classList.add('copied');
            
            // Reset tooltip after 2 seconds
            setTimeout(() => {
                tooltip.textContent = 'Cliquer pour copier';
                this.classList.remove('copied');
            }, 2000);
        });
    });
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
}); 