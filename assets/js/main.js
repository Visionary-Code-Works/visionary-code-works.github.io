document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Collapsible sections - for FAQs or similar sections
  document.querySelectorAll(".collapsible").forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Image Gallery - Lightbox effect
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", function () {
      var src = this.getAttribute("data-src");
      var lightboxImage = document.getElementById("lightbox-image");
      var lightboxContainer = document.getElementById("lightbox-container");
      if (lightboxImage && lightboxContainer) {
        lightboxImage.src = src;
        lightboxContainer.style.display = "block"; // Show the lightbox
      }
    });
  });

  // Initializing Bootstrap Tooltips
  if (window.bootstrap && bootstrap.Tooltip) {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // Event listener for Bootstrap Modal
  var myModal = document.getElementById("myModal");
  if (myModal) {
    myModal.addEventListener("shown.bs.modal", function () {
      console.log("Modal is shown!");
    });
  }

  // Custom JavaScript for toggling classes
  var toggleButton = document.getElementById("toggle-button");
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Dynamic content loading
  var loadMoreButton = document.getElementById("load-more");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", function () {
      // Example: Fetch more data using Ajax and append it to the DOM
      fetch("/api/load-more-content?page=2")
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          document.getElementById("content-container").innerHTML += html;
        })
        .catch(function (err) {
          console.warn("Something went wrong.", err);
        });
    });
  }

  // Handling Bootstrap Carousel events
  var myCarousel = document.querySelector("#myCarousel");
  if (myCarousel) {
    myCarousel.addEventListener("slide.bs.carousel", function (e) {
      console.log("Carousel is sliding to item index:", e.to);
    });
  }

  // Form Validation before Submit
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  }

  // Dynamically loading script
  var loadScriptButton = document.getElementById("load-script");
  if (loadScriptButton) {
    loadScriptButton.addEventListener("click", function () {
      var script = document.createElement("script");
      script.src = "/assets/js/custom.js";
      script.onload = function () {
        console.log("Script loaded and ready");
      };
      document.head.appendChild(script);
    });
  }

  // Toggle Button for Dark Mode
  const darkModeToggle = document.querySelector("#dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
      );
      // Save preference in local storage or handle theme switching logic
    });
  }

  // Responsive Navigation Menu Toggle for Mobile View
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-navigation");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
    });
  }

  // Countdown Timer for Events
  const countdownTimer = document.getElementById("countdown-timer");
  if (countdownTimer) {
    const targetDate = new Date(
      countdownTimer.getAttribute("data-target-date")
    ).getTime();
    const updateCountdown = setInterval(function () {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownTimer.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(updateCountdown);
        countdownTimer.innerHTML = "Event Started";
      }
    }, 1000);
  }

  // Dynamic Content Loading on Scroll
  window.addEventListener("scroll", function () {
    const loadOnScrollElement = document.getElementById("load-on-scroll");
    if (
      loadOnScrollElement &&
      window.scrollY + window.innerHeight >= loadOnScrollElement.offsetTop
    ) {
      // Load content dynamically or display additional content
      console.log("Load dynamic content here");
      // Example: Similar to 'load more' functionality
    }
  });

  // // Tooltips Initialization (If Bootstrap is not used)
  // // If you are not using Bootstrap, you can initialize tooltips manually
  // const tooltips = document.querySelectorAll('.tooltip');
  // tooltips.forEach(tooltip => {
  //     tooltip.addEventListener('mouseover', function() {
  //         const tooltipText = this.getAttribute('data-tooltip');
  //         // Show tooltip logic
  //     });
  //     tooltip.addEventListener('mouseout', function() {
  //         // Hide tooltip logic
  //     });
  // });

  // Sticky Navigation on Scroll
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // Back to Top Button
  const backToTopButton = document.querySelector("#back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Toggle Class for Elements on Click
  document.querySelectorAll(".toggle-class-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      document
        .querySelector(trigger.getAttribute("data-target"))
        .classList.toggle("active");
    });
  });

  // Lazy Loading Images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          imgObserver.unobserve(lazyImage);
        }
      });
    });

    document.querySelectorAll("img.lazy").forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // Accordion Functionality
  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-header").addEventListener("click", () => {
      item.classList.toggle("open");
      const panel = item.querySelector(".accordion-panel");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
