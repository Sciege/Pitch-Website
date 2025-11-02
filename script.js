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
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
});