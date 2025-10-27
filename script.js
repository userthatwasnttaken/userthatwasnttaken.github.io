document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links that point to an ID on the current page
    const smoothScrollLinks = document.querySelectorAll('nav a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent the default jump action
            e.preventDefault();

            // Get the target element ID from the href attribute
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use the scrollIntoView method for a smooth scroll
                // 'behavior: smooth' handles the animation
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
