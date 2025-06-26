// Toggle mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("show");
}

// Toggle FAQ answers
function toggleAnswer(button) {
  const faqItem = button.closest('.faq-item');
  const answer = faqItem.querySelector('.faq-answer');
  const icon = button.querySelector('.toggle-icon');
  
  // Toggle active class
  answer.classList.toggle('active');
  button.classList.toggle('active');
  
  // Toggle icon
  if (icon.textContent === '+') {
    icon.textContent = '−';
  } else {
    icon.textContent = '+';
  }
}

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu event
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
  
  // Add event listeners for FAQ questions
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', (e) => {
      toggleAnswer(e.currentTarget);
    });
  });
  
  // Set active navigation item
  const currentPage = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
