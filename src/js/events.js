let slideIndex = 1;
    let tabId;
    const activeTab = document.querySelector('.tab-pane.active');
    if (activeTab) {
        tabId = activeTab.id;  // Set tabId here
        
    }

    function showSlides(n, tabId) {
        const slides = document.getElementById(tabId).getElementsByClassName("slide");
       
        const dots = document.getElementById(tabId).getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

      // Set transition for all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transition = 'opacity 0.5s ease-in-out';
  }

  // Set opacity to 0 for all slides initially (for fade-in effect)
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  // Display and fade in the current slide
  slides[slideIndex - 1].style.opacity = 1;
  slides[slideIndex - 1].style.display = "block";
  
        // Remove the "active" class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Display the current slide and mark its corresponding dot as active
  
        dots[slideIndex - 1].className += " active";
        
       
    }
    function plusSlidesl(n, tabId) {
        showSlides((slideIndex += n), tabId);
    }
    function plusSlidesr(n, tabId) {
        showSlides((slideIndex += n), tabId);
    }
    function currentSlide(n, tabId) {
        showSlides((slideIndex = n), tabId, null);
    }
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tabId = entry.target.id;
                showSlides(1, tabId,true);
            }
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all tab panes
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(tabPane => {
        observer.observe(tabPane);
    });
    