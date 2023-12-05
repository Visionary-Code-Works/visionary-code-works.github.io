document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Collapsible sections - for FAQs or similar sections
    document.querySelectorAll('.collapsible').forEach(collapsible => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Image Gallery - Lightbox effect
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            var src = this.getAttribute('data-src');
            var lightboxImage = document.getElementById('lightbox-image');
            if (lightboxImage) {
                lightboxImage.src = src;
                // Code to show lightbox
            }
        });
    });
    // Initializing Bootstrap Tooltips
    if (window.bootstrap && bootstrap.Tooltip) {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Event listener for Bootstrap Modal
    var myModal = document.getElementById('myModal');
    if (myModal) {
        myModal.addEventListener('shown.bs.modal', function () {
            console.log('Modal is shown!');
        });
    }

    // Custom JavaScript for toggling classes
    var toggleButton = document.getElementById('toggle-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Dynamic content loading
    var loadMoreButton = document.getElementById('load-more');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // Example: Ajax call to load more content
            // Fetch more data and append it to the DOM
            console.log('Load more content here...');
        });
    }

    // Handling Bootstrap Carousel events
    var myCarousel = document.querySelector('#myCarousel');
    if (myCarousel) {
        myCarousel.addEventListener('slide.bs.carousel', function (e) {
            console.log('Carousel slide event!');
            // Additional carousel handling code
        });
    }


    // Form Validation before Submit
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }

    // Dynamically loading script
    var loadScriptButton = document.getElementById('load-script');
    if (loadScriptButton) {
        loadScriptButton.addEventListener('click', function() {
            var script = document.createElement('script');
            script.src = 'path/to/your/dynamic/script.js';
            document.head.appendChild(script);
        });
    }

    // Toggle Button for Dark Mode
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            // Save preference in local storage or handle theme switching logic
        });
    }

    // Responsive Navigation Menu Toggle for Mobile View
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-navigation');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Countdown Timer for Events
    const countdownTimer = document.getElementById('countdown-timer');
    if (countdownTimer) {
        const targetDate = new Date(countdownTimer.getAttribute('data-target-date')).getTime();
        const updateCountdown = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownTimer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(updateCountdown);
                countdownTimer.innerHTML = "Event Started";
            }
        }, 1000);
    }

    // Dynamic Content Loading on Scroll
    window.addEventListener('scroll', function() {
        const loadOnScrollElement = document.getElementById('load-on-scroll');
        if (loadOnScrollElement && window.scrollY + window.innerHeight >= loadOnScrollElement.offsetTop) {
            // Load content dynamically or display additional content
            console.log('Load dynamic content here');
        }
    });

    // Tooltips Initialization (If Bootstrap is not used)
    // If you are not using Bootstrap, you can initialize tooltips manually
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', function() {
            // Show tooltip logic
        });
        tooltip.addEventListener('mouseout', function() {
            // Hide tooltip logic
        });
    });

    // More custom JavaScript code
    // ...
});
