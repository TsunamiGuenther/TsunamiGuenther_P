/**
 * Tsunami Guenther - Disposition Management System
 * JavaScript für Header-Scroll-Animation und Interaktionen
 * 
 * @author Frank Günther & Christian Pitz
 * @date 2025-12-14
 */

// Header Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
});
