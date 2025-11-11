// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  console.log("DOM loaded, initializing three-set features...");
  
  // ===========================================
  // FEATURE TOGGLE: Default / Students / Teachers
  // ===========================================
  const studentBtn = document.getElementById('studentBtn');
  const teacherBtn = document.getElementById('teacherBtn');
  const defaultFeatures = document.getElementById('defaultFeatures');
  const studentFeatures = document.getElementById('studentFeatures');
  const teacherFeatures = document.getElementById('teacherFeatures');

  if (studentBtn && teacherBtn && defaultFeatures && studentFeatures && teacherFeatures) {
    console.log("Setting up three-set feature toggle...");

    // Function to show only one set of features
    const showFeatures = (showDefault, showStudent, showTeacher) => {
      if (showDefault) {
        defaultFeatures.classList.remove('hidden');
        studentFeatures.classList.add('hidden');
        teacherFeatures.classList.add('hidden');
      } else if (showStudent) {
        defaultFeatures.classList.add('hidden');
        studentFeatures.classList.remove('hidden');
        teacherFeatures.classList.add('hidden');
      } else if (showTeacher) {
        defaultFeatures.classList.add('hidden');
        studentFeatures.classList.add('hidden');
        teacherFeatures.classList.remove('hidden');
      }
    };

    // Event listener for Student button
    studentBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Check if button is already active (unclick functionality)
      if (studentBtn.classList.contains('active')) {
        // Unclick - show default cards
        studentBtn.classList.remove('active');
        showFeatures(true, false, false);
        console.log("Student button unclicked - showing default features");
      } else {
        // Click - show student cards
        studentBtn.classList.add('active');
        teacherBtn.classList.remove('active');
        showFeatures(false, true, false);
        console.log("Showing student features");
      }
    });

    // Event listener for Teacher button
    teacherBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Check if button is already active (unclick functionality)
      if (teacherBtn.classList.contains('active')) {
        // Unclick - show default cards
        teacherBtn.classList.remove('active');
        showFeatures(true, false, false);
        console.log("Teacher button unclicked - showing default features");
      } else {
        // Click - show teacher cards
        teacherBtn.classList.add('active');
        studentBtn.classList.remove('active');
        showFeatures(false, false, true);
        console.log("Showing teacher features");
      }
    });
    
    console.log("Three-set feature toggle ready!");
  }

  // ===========================================
  // FAQ SECTION - Dynamic Creation
  // ===========================================
  const mainElement = document.querySelector("main");
  
  if (mainElement) {
    const faqSection = document.createElement("section");
    faqSection.className = "faq-section";
    faqSection.style.cssText = `
      padding: 60px 20px;
      background: #d9d9d9;
    `;

    const faqContainer = document.createElement("div");
    faqContainer.className = "container";
    faqContainer.style.cssText = `
      max-width: 900px;
      margin: 0 auto;
    `;

    const faqTitle = document.createElement("h2");
    faqTitle.textContent = "Frequently Asked Questions";
    faqTitle.style.cssText = `
      text-align: center;
      margin-bottom: 40px;
      font-size: 32px;
      color: #333;
    `;

    const faqs = [
      {
        question: "Who can use CCS ProjectHub?",
        answer: "CCS ProjectHub is designed specifically for students and instructors of the College of Computer Studies at MSU-IIT. Students can submit and showcase their projects, while instructors can evaluate submissions."
      },
      {
        question: "How do I submit my project?",
        answer: "Once registered, navigate to the submission page, select your subject and lab activity, upload your code files, and add a description. Your project will be visible to your classmates and instructor immediately."
      },
      {
        question: "Can I update my submission after uploading?",
        answer: "Yes! You can edit your project details, update code files, and modify your description at any time before the deadline set by your instructor."
      },
      {
        question: "Is my code visible to everyone?",
        answer: "Your projects are visible to other CCS students and instructors to promote collaborative learning. You can view the submission of your classmates once it is past the deadline."
      }
    ];

    faqs.forEach((faq) => {
      const faqItem = document.createElement("div");
      faqItem.className = "faq-item";
      faqItem.style.cssText = `
        background: white;
        margin-bottom: 15px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
      `;

      const faqQuestion = document.createElement("div");
      faqQuestion.className = "faq-question";
      faqQuestion.style.cssText = `
        padding: 20px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        color: #333;
        user-select: none;
      `;

      const questionText = document.createElement("span");
      questionText.textContent = faq.question;

      const toggleIcon = document.createElement("span");
      toggleIcon.textContent = "+";
      toggleIcon.style.cssText = `
        font-size: 24px;
        font-weight: bold;
        color: #667eea;
        transition: transform 0.3s ease;
      `;

      faqQuestion.appendChild(questionText);
      faqQuestion.appendChild(toggleIcon);

      const faqAnswer = document.createElement("div");
      faqAnswer.className = "faq-answer";
      faqAnswer.textContent = faq.answer;
      faqAnswer.style.cssText = `
        max-height: 0;
        overflow: hidden;
        padding: 0 20px;
        color: #666;
        line-height: 1.6;
        transition: all 0.3s ease;
      `;

      faqQuestion.addEventListener("click", function() {
        const isOpen = faqAnswer.style.maxHeight && faqAnswer.style.maxHeight !== "0px";

        if (isOpen) {
          faqAnswer.style.maxHeight = "0";
          faqAnswer.style.padding = "0 20px";
          toggleIcon.style.transform = "rotate(0deg)";
        } else {
          faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 40 + "px";
          faqAnswer.style.padding = "20px";
          toggleIcon.style.transform = "rotate(45deg)";
        }
      });

      faqItem.addEventListener("mouseenter", function() {
        this.style.boxShadow = "0 4px 20px rgba(102, 126, 234, 0.2)";
      });

      faqItem.addEventListener("mouseleave", function() {
        this.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      });

      faqItem.appendChild(faqQuestion);
      faqItem.appendChild(faqAnswer);
      faqContainer.appendChild(faqItem);
    });

    faqContainer.insertBefore(faqTitle, faqContainer.firstChild);
    faqSection.appendChild(faqContainer);
    mainElement.appendChild(faqSection);
  }

  // ===========================================
  // CSS ANIMATIONS
  // ===========================================
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hidden {
      display: none !important;
    }
  `;
  document.head.appendChild(style);

  console.log("✅ CCS ProjectHub - All interactive features loaded successfully!");

// ===========================================
// AUTOMATIC CAROUSEL SLIDER
// ===========================================
const slider = document.querySelector('.carousel-ex .slider');
const images = document.querySelectorAll('.carousel-ex .slider img');

if (slider && images.length > 0) {
  console.log("Carousel found, initializing auto-slide...");
  
  let currentIndex = 0;
  const totalImages = images.length;
  const autoSlideInterval = 4000; // 4 seconds between slides
  let autoSlide = null;
  let isUserInteracting = false;
  let interactionTimeout = null;
  
  function goToSlide(index) {
    images[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }
  
  function nextSlide() {
    if (!isUserInteracting) {
      currentIndex = (currentIndex + 1) % totalImages;
      goToSlide(currentIndex);
    }
  }
  
  function startAutoSlide() {
    if (autoSlide) clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, autoSlideInterval);
    console.log("Auto-slide started");
  }
  
  function stopAutoSlide() {
    if (autoSlide) {
      clearInterval(autoSlide);
      autoSlide = null;
      console.log("Auto-slide stopped");
    }
  }
  
  // Stop auto-slide when user hovers
  slider.addEventListener('mouseenter', () => {
    isUserInteracting = true;
    stopAutoSlide();
  });
  
  // Resume auto-slide 3 seconds after mouse leaves
  slider.addEventListener('mouseleave', () => {
    isUserInteracting = false;
    clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
      startAutoSlide();
    }, 3000); // Wait 3 seconds before resuming
  });
  
  // Stop auto-slide when user manually scrolls
  slider.addEventListener('scroll', () => {
    isUserInteracting = true;
    stopAutoSlide();
    
    // Clear previous timeout
    clearTimeout(interactionTimeout);
    
    // Resume auto-slide after 5 seconds of no scrolling
    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
      startAutoSlide();
    }, 5000);
  });
  
  // Handle navigation dot clicks
  const navDots = document.querySelectorAll('.carousel-ex-nav a');
  navDots.forEach((dot, index) => {
    dot.addEventListener('click', function(e) {
      currentIndex = index;
      isUserInteracting = true;
      stopAutoSlide();
      
      // Resume after 5 seconds
      clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => {
        isUserInteracting = false;
        startAutoSlide();
      }, 5000);
    });
  });
  
  // Start auto-slide initially
  startAutoSlide();
  
  console.log("✅ Carousel auto-slide initialized!");
}
});
//Lab Activity 4: Client-Side Data Persistence
// Check for browser localStorage support
if (typeof(Storage) !== "undefined") {
  // Browser supports localStorage
  console.log("localStorage is supported");
  
  // Load theme immediately to prevent flash of unstyled content
  loadTheme();
} else {
  // localStorage not supported
  console.warn("localStorage is not supported in this browser");
  alert("Your browser does not support localStorage. Theme preferences will not be saved.");
}

/**
 * loadTheme()
 * Retrieves the saved theme from localStorage and applies it to the page
 * This function runs on page load to restore user's theme preference
 */
function loadTheme() {
  // Get the saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // If a theme was previously saved, apply it
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    console.log(`Loaded theme: ${savedTheme}`);
    
    // Update toggle button text if it exists
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      updateToggleButton(savedTheme);
    }
  } else {
    // No saved theme, default to light mode
    console.log("No saved theme found, using default (light mode)");
  }
}

/**
 * saveTheme(theme)
 * Saves the current theme preference to localStorage
 * @param {string} theme - The theme to save ('dark-mode' or removes for light)
 */
function saveTheme(theme) {
  if (theme === 'dark-mode') {
    localStorage.setItem('theme', 'dark-mode');
    console.log("Theme saved: dark-mode");
  } else {
    // Remove the theme item for light mode (default)
    localStorage.removeItem('theme');
    console.log("Theme saved: light-mode (default)");
  }
}

/**
 * toggleTheme()
 * Switches between light and dark themes
 * Updates both the DOM and localStorage
 */
function toggleTheme() {
  const body = document.body;
  
  // Toggle the dark-mode class
  body.classList.toggle('dark-mode');
  
  // Determine current theme
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  
  // Save the theme to localStorage
  saveTheme(currentTheme);
  
  // Update button text
  updateToggleButton(currentTheme);
  
  console.log(`Theme switched to: ${currentTheme}`);
}

/**
 * updateToggleButton(theme)
 * Updates the theme toggle button text based on current theme
 * @param {string} theme - Current theme ('dark-mode' or 'light-mode')
 */
function updateToggleButton(theme) {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    if (theme === 'dark-mode') {
      themeToggle.textContent = '☀️ Light Mode';
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeToggle.textContent = '🌙 Dark Mode';
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
}

/**
 * Initialize theme toggle button when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  
  if (themeToggle) {
    // Attach event listener using addEventListener (not inline onclick)
    themeToggle.addEventListener('click', toggleTheme);
    
    // Set initial button text based on current theme
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    updateToggleButton(currentTheme);
    
    console.log("Theme toggle button initialized");
  }
});