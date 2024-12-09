document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // Check if the section is in the viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('section-visible');

            // Check for flex containers within the section
            const flexContainers = section.querySelectorAll('.flex-container');
            flexContainers.forEach(container => {
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    container.classList.add('flex-visible');
                } else {
                    container.classList.remove('flex-visible');
                }
            });
        } else {
            section.classList.remove('section-visible');
        }
    });
});
