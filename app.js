// Shared JS Utilities and Logic

const App = {
  init() {
    this.renderNavbar();
    this.setupAnimations();
    this.checkAuthRedirect();
  },

  // LocalStorage Helpers
  getUser() {
    return JSON.parse(localStorage.getItem('adhyaai_user')) || null;
  },

  saveUser(userData) {
    const existing = this.getUser() || {};
    localStorage.setItem('adhyaai_user', JSON.stringify({ ...existing, ...userData }));
  },

  getUserName() {
    const user = this.getUser();
    return user ? (user.name || 'Student') : 'Student';
  },

  getProgress() {
    return JSON.parse(localStorage.getItem('adhyaai_progress')) || {
      playbooks_read: [],
      playbooks_completed: [],
      skills_checked: [],
      weekly_action_done: false,
      weekly_action_date: null
    };
  },

  saveProgress(progressData) {
    const existing = this.getProgress();
    localStorage.setItem('adhyaai_progress', JSON.stringify({ ...existing, ...progressData }));
  },

  // Render Navbar
  renderNavbar() {
    const user = this.getUser();
    const navHTML = `
      <nav class="navbar">
        <div class="container nav-container">
          <a href="index.html" class="logo">adhya<span>AI</span></a>
          <button class="mobile-menu-btn" id="mobile-menu-btn">☰</button>
          <div class="nav-links" id="nav-links">
            <a href="adhyai.html" class="nav-ai ${this.isActive('adhyai.html') ? 'active' : ''}">✦ AI</a>
            <a href="playbooks.html" class="${this.isActive('playbooks.html') ? 'active' : ''}">Playbooks</a>
            <a href="roadmap.html" class="${this.isActive('roadmap.html') ? 'active' : ''}">Roadmap</a>
            <a href="skill-builder.html" class="${this.isActive('skill-builder.html') ? 'active' : ''}">Skills</a>
            <a href="doubt.html" class="${this.isActive('doubt.html') ? 'active' : ''}">FAQ</a>
            ${user && user.onboarding_complete 
              ? `<a href="roadmap.html" class="btn btn-primary" style="padding: 8px 18px; color: white !important; font-size: 13px;">Dashboard</a>`
              : `<a href="onboarding.html" class="btn btn-primary" style="padding: 8px 18px; color: white !important; font-size: 13px;">Get Started</a>`
            }
          </div>
        </div>
      </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const links = document.getElementById('nav-links');
    if(btn && links) {
      btn.addEventListener('click', () => {
        links.classList.toggle('show');
      });
    }
  },

  isActive(path) {
    return window.location.pathname.includes(path);
  },

  // Setup Scroll Animations
  setupAnimations() {
    const elements = document.querySelectorAll('.fade-in-up, .stagger-container');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(el => observer.observe(el));
  },

  // Redirect Logic
  checkAuthRedirect() {
    const user = this.getUser();
    const currentPath = window.location.pathname;
    
    const protectedPages = ['roadmap.html', 'skill-builder.html'];
    
    if (protectedPages.some(page => currentPath.includes(page)) && (!user || !user.onboarding_complete)) {
      window.location.href = 'onboarding.html';
    }
  }
};

// Initialize App on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
