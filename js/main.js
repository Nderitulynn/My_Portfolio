/* ==========================================================================
   Portfolio Main JavaScript
   Author: [Your Name]
   Created: August 2025
   ========================================================================== */

/**
 * TABLE OF CONTENTS
 * 1. DOM Content Loaded
 * 2. Smooth Scrolling Navigation
 * 3. Scroll Animations
 * 4. Theme Toggle (if implementing)
 * 5. Utility Functions
 */

/* ==========================================================================
   1. DOM Content Loaded - Initialize Everything
   ========================================================================== */
/* ==========================================================================
   1. DOM Content Loaded - Initialize Everything
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    console.log('Hello World from JavaScript!');
    
    // Test that JavaScript is working
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        console.log('Hero section found and connected!');
    }
    
    // Initialize all functions
    initSmoothScrolling();
    initScrollAnimations();
    initNavigation();
});

/* ==========================================================================
   2. Smooth Scrolling Navigation
   ========================================================================== */
function initSmoothScrolling() {
    // Smooth scrolling implementation will go here
}

/* ==========================================================================
   3. Scroll Animations
   ========================================================================== */
function initScrollAnimations() {
    // Intersection Observer for scroll animations will go here
}

/* ==========================================================================
   4. Navigation Functions
   ========================================================================== */
function initNavigation() {
    // Mobile menu toggle and navigation logic will go here
}

/* ==========================================================================
   5. Utility Functions
   ========================================================================== */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}