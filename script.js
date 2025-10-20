/* ================================================
   SAMUEL KAMANGA - PORTFOLIO JAVASCRIPT
   Creative Developer & FlutterFlow Expert
   ================================================ */

// ================================================
// PAGE LOADER
// ================================================

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 800);
});

// ================================================
// SMOOTH SCROLLING - DISABLED LENIS FOR BETTER PERFORMANCE
// Using native smooth scroll instead
// ================================================

let lenis = null; // Disabled Lenis to fix scrolling issues

// Smooth scroll for anchor links using native scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// ================================================
// NAVIGATION SCROLL EFFECTS
// ================================================

let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
    
    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ================================================
// MOBILE MENU TOGGLE
// ================================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ================================================
// SCROLL PROGRESS INDICATOR
// ================================================

const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ================================================
// BACK TO TOP BUTTON
// ================================================

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================================
// CUSTOM CURSOR GLOW EFFECT
// ================================================

const cursorGlow = document.querySelector('.cursor-glow');

if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursorGlow, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    document.addEventListener('mouseenter', () => {
        gsap.to(cursorGlow, { opacity: 1, duration: 0.3 });
    });

    document.addEventListener('mouseleave', () => {
        gsap.to(cursorGlow, { opacity: 0, duration: 0.3 });
    });
}

// ================================================
// ANIMATED GRADIENT CANVAS BACKGROUND
// ================================================

const canvas = document.getElementById('gradient-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

if (canvas && ctx) {
    let time = 0;
    let animationActive = true;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function drawGradient() {
        if (!animationActive) return;
        
        time += 0.002;

        const gradient = ctx.createLinearGradient(
            Math.cos(time) * canvas.width,
            Math.sin(time) * canvas.height,
            Math.cos(time + Math.PI) * canvas.width,
            Math.sin(time + Math.PI) * canvas.height
        );

        gradient.addColorStop(0, '#5D5FEF');
        gradient.addColorStop(0.5, '#00C6FF');
        gradient.addColorStop(1, '#5D5FEF');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add subtle particles (reduced for performance)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        for (let i = 0; i < 30; i++) {
            const x = (Math.sin(time + i) * 0.5 + 0.5) * canvas.width;
            const y = (Math.cos(time * 0.7 + i) * 0.5 + 0.5) * canvas.height;
            const size = Math.sin(time + i) * 2 + 2;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(drawGradient);
    }

    drawGradient();

    // Pause animation when hero is out of view for performance
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            animationActive = entry.isIntersecting;
            if (animationActive) {
                drawGradient();
            }
        });
    });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}

// ================================================
// GSAP ANIMATIONS
// ================================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Ensure all elements are visible by default (fallback)
gsap.set('.hero-image-wrapper, .hero-title, .hero-subtitle, .hero-tagline, .cta-button', {
    opacity: 1,
});

// Hero Section Animations
gsap.from('.hero-image-wrapper', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2,
});

gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.4,
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    delay: 0.6,
});

gsap.from('.hero-tagline', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    delay: 0.8,
});

gsap.from('.cta-button', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    delay: 1,
});

// About Section Animations
gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power3.out',
});

gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
});

// Projects Section - Staggered Animation
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 80,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
});

// Showcase Section - Staggered Grid Animation
gsap.from('.showcase-item', {
    scrollTrigger: {
        trigger: '.showcase-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
    },
    opacity: 0,
    scale: 0.9,
    y: 30,
    duration: 0.6,
    stagger: {
        amount: 1,
        from: 'start',
    },
    ease: 'power2.out',
});

// Contact Section Animations
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out',
});

gsap.from('.social-links', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power3.out',
});

// Section Title Animations
gsap.utils.toArray('.section-title').forEach((title) => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
    });
});

// ================================================
// ANIMATED COUNTERS
// ================================================

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counters on scroll
ScrollTrigger.create({
    trigger: '.stats-grid',
    start: 'top 70%',
    onEnter: () => {
        document.querySelectorAll('.stat-number').forEach((counter) => {
            if (!counter.classList.contains('counted')) {
                counter.classList.add('counted');
                animateCounter(counter);
            }
        });
    },
});

// ================================================
// VANILLA TILT INITIALIZATION
// ================================================

// Apply tilt to about image
const aboutImage = document.querySelector('.about-image');
if (aboutImage) {
    VanillaTilt.init(aboutImage, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
    });
}

// Apply tilt to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
    VanillaTilt.init(card, {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
    });
});

// ================================================
// GLIGHTBOX INITIALIZATION
// ================================================

const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    closeButton: true,
    skin: 'clean',
});

// ================================================
// CONTACT FORM HANDLING
// ================================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');
const submitBtn = document.querySelector('.btn-submit');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        formStatus.style.display = 'none';

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            const data = await response.json();
            
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;

            if (response.ok || data.success) {
                formStatus.className = 'form-status success';
                formStatus.innerHTML = '✓ Message sent successfully!<br>I\'ll get back to you soon.';
                formStatus.style.display = 'block';
                contactForm.reset();

                // Animate success message
                gsap.from(formStatus, {
                    opacity: 0,
                    y: -10,
                    duration: 0.5,
                    ease: 'power2.out',
                });

                // Hide success message after 7 seconds
                setTimeout(() => {
                    gsap.to(formStatus, {
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                            formStatus.style.display = 'none';
                            formStatus.style.opacity = '1';
                        },
                    });
                }, 7000);
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            formStatus.className = 'form-status error';
            formStatus.innerHTML = '✗ Oops! Something went wrong.<br>Please try again or email me directly.';
            formStatus.style.display = 'block';

            // Animate error message
            gsap.from(formStatus, {
                opacity: 0,
                y: -10,
                duration: 0.5,
                ease: 'power2.out',
            });
            
            console.error('Form submission error:', error);
        }
    });
}

// ================================================
// HOVER EFFECTS FOR BUTTONS & LINKS
// ================================================

// Add pulse effect to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    });
}

// Social icons hover animation
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'back.out(1.7)',
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'back.out(1.7)',
        });
    });
});

// ================================================
// PARALLAX EFFECT FOR HERO (Subtle effect to keep profile visible)
// ================================================

gsap.to('.hero-image-wrapper', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
    },
    y: 30,
    opacity: 1,  // Keep profile image fully visible
    ease: 'none',
});

gsap.to('.hero-text', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
    },
    y: 50,
    opacity: 0.3,
    ease: 'none',
});

// ================================================
// PERFORMANCE OPTIMIZATIONS
// ================================================

// Lazy load images with error handling
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        imageObserver.observe(img);
    });
}

// Ensure all images are loaded properly
document.querySelectorAll('img').forEach((img) => {
    // Add error handler
    img.addEventListener('error', function() {
        console.warn('Failed to load image:', this.src);
        // Optionally, you can set a fallback image here
    });
    
    // Force load hero image immediately
    if (img.classList.contains('hero-image') || img.classList.contains('about-image')) {
        img.loading = 'eager';
    }
});

// Reduce animations on mobile for performance
const isMobile = window.matchMedia('(max-width: 768px)').matches;
if (isMobile) {
    // Disable some heavy animations on mobile
    ScrollTrigger.defaults({
        toggleActions: 'play none none none',
    });
}

// ================================================
// UTILITIES
// ================================================

// Smooth reveal on page load - removed opacity setting as it causes visibility issues
window.addEventListener('load', () => {
    // Ensure all content is visible
    gsap.set('body', { opacity: 1 });
    
    // Failsafe: Ensure all animated elements are visible after 2 seconds
    setTimeout(() => {
        const elements = document.querySelectorAll('.project-card, .showcase-item, .about-image, .about-content, .contact-form, .social-links, .section-title');
        elements.forEach(el => {
            if (el.style.opacity === '' || el.style.opacity === '0') {
                gsap.set(el, { opacity: 1, clearProps: 'transform' });
            }
        });
    }, 2000);
    
    ScrollTrigger.refresh();
});

// Update ScrollTrigger on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ================================================
// PROJECT MODAL FUNCTIONALITY
// ================================================

const projectsData = {
    ukuuhr: {
        title: 'Ukuu HR - Comprehensive HR Management System',
        tags: ['FlutterFlow', 'Firebase', 'HR Tech', 'Cloud Functions', 'Real-time Database'],
        description: `
            <h3>Project Overview</h3>
            <p>Ukuu HR is a comprehensive Human Resources management system designed to streamline HR operations for modern businesses. Built with FlutterFlow and powered by Firebase, it offers a complete solution for employee management, performance tracking, and organizational workflows.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Employee Management:</strong> Complete employee profiles with personal information, documents, and history tracking</li>
                <li><strong>Performance Analytics:</strong> Advanced analytics dashboard for tracking employee performance metrics and KPIs</li>
                <li><strong>Leave Management:</strong> Streamlined leave request and approval system with calendar integration</li>
                <li><strong>Attendance Tracking:</strong> Real-time attendance monitoring with geolocation verification</li>
                <li><strong>Document Management:</strong> Secure storage and management of employee documents and contracts</li>
                <li><strong>Reporting:</strong> Comprehensive reporting tools for HR insights and compliance</li>
                <li><strong>Role-based Access:</strong> Multiple user roles with customized permissions (Admin, HR Manager, Employee)</li>
                <li><strong>Mobile-First Design:</strong> Fully responsive interface optimized for mobile devices</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <p>The application leverages FlutterFlow's visual development environment combined with custom code for complex business logic. Firebase provides the backend infrastructure including Authentication, Firestore for real-time data, Cloud Storage for documents, and Cloud Functions for server-side processing.</p>
            
            <h3>Impact</h3>
            <p>Ukuu HR has significantly improved HR operational efficiency by automating manual processes and providing real-time insights into workforce management. The mobile-first approach ensures accessibility for both office and remote employees.</p>
        `,
        images: [
            'portfolio work/ukuuhr/Screenshot 2025-10-20 203416.png',
            'portfolio work/ukuuhr/Screenshot 2025-10-20 203545.png',
            'portfolio work/ukuuhr/Screenshot 2025-10-20 203627.png',
            'portfolio work/ukuuhr/Screenshot 2025-10-20 203714.png',
            'portfolio work/ukuuhr/Screenshot 2025-10-20 203757.png',
            'portfolio work/ukuuhr/Screenshot 2025-10-20 203839.png'
        ],
        liveUrl: 'https://app.flutterflow.io/project/ukuu-h-r-yfz6pb'
    },
    digitalradicalz: {
        title: 'DigitalRadicolz - Dynamic Community Platform',
        tags: ['FlutterFlow', 'Community', 'Social', 'Real-time', 'Firebase'],
        description: `
            <h3>Project Overview</h3>
            <p>DigitalRadicolz is a dynamic community platform that enables meaningful connections and content sharing. It's designed to foster engagement through real-time interactions, user-generated content, and community-driven features.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>User Profiles:</strong> Customizable user profiles with bio, interests, and activity feed</li>
                <li><strong>Content Sharing:</strong> Multi-media content posting with image, video, and text support</li>
                <li><strong>Real-time Updates:</strong> Live feed updates and instant notifications for user interactions</li>
                <li><strong>Engagement Tools:</strong> Like, comment, and share functionality with engagement analytics</li>
                <li><strong>Community Groups:</strong> Create and join interest-based communities</li>
                <li><strong>Direct Messaging:</strong> Private messaging system for one-on-one conversations</li>
                <li><strong>Search & Discovery:</strong> Advanced search functionality to discover users and content</li>
                <li><strong>Moderation Tools:</strong> Built-in content moderation and reporting system</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <p>Built using FlutterFlow for rapid development and Firebase for scalable backend infrastructure. The platform uses Firestore for real-time data synchronization, Cloud Storage for media files, and Firebase Cloud Messaging for push notifications.</p>
            
            <h3>User Experience</h3>
            <p>The interface is designed with a focus on intuitive navigation and seamless interactions. The app features smooth animations, responsive design, and an engaging visual hierarchy that encourages user participation.</p>
        `,
        images: [
            'portfolio work/DIgitalRadicalz/Screenshot 2025-10-20 202857.png',
            'portfolio work/DIgitalRadicalz/Screenshot 2025-10-20 203014.png',
            'portfolio work/DIgitalRadicalz/Screenshot 2025-10-20 203113.png',
            'portfolio work/DIgitalRadicalz/Screenshot 2025-10-20 203157.png',
            'portfolio work/DIgitalRadicalz/Screenshot 2025-10-20 203240.png'
        ],
        liveUrl: 'https://app.flutterflow.io/project/bright-wave-ioj9xl'
    },
    optimum: {
        title: 'Optimum - Smart Financial Management',
        tags: ['FlutterFlow', 'Finance', 'Analytics', 'Data Visualization', 'AI/ML'],
        description: `
            <h3>Project Overview</h3>
            <p>Optimum is a comprehensive financial management platform that combines intelligent budgeting, expense tracking, and advanced analytics to help users achieve their financial goals. The app provides actionable insights through data visualization and AI-powered recommendations.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Smart Budgeting:</strong> Intelligent budget creation with category-based spending limits and alerts</li>
                <li><strong>Expense Tracking:</strong> Automated expense categorization and tracking with receipt scanning</li>
                <li><strong>Financial Analytics:</strong> Comprehensive financial reports with interactive charts and graphs</li>
                <li><strong>Goal Setting:</strong> Set and track financial goals with progress visualization</li>
                <li><strong>Bill Reminders:</strong> Automatic bill reminders and payment tracking</li>
                <li><strong>Investment Tracking:</strong> Monitor investment portfolios and returns</li>
                <li><strong>Multi-Account Support:</strong> Manage multiple bank accounts and credit cards in one place</li>
                <li><strong>Data Security:</strong> Bank-level encryption and secure data storage</li>
                <li><strong>Spending Insights:</strong> AI-powered insights and recommendations for better financial decisions</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <p>Optimum is built with FlutterFlow for cross-platform compatibility and utilizes Firebase for secure backend services. The app features custom chart components for data visualization, cloud functions for automated calculations, and integration with financial APIs for real-time data.</p>
            
            <h3>Design Philosophy</h3>
            <p>The design focuses on making complex financial data accessible and actionable. Clean layouts, intuitive navigation, and thoughtful use of color coding help users quickly understand their financial status and make informed decisions.</p>
        `,
        images: [
            'portfolio work/Optimum/Screenshot 2025-10-20 202607.png',
            'portfolio work/Optimum/Screenshot 2025-10-20 202705.png',
            'portfolio work/Optimum/Screenshot 2025-10-20 202733.png'
        ],
        liveUrl: 'https://app.flutterflow.io/project/optimum-gd0dym'
    }
};

function openProjectModal(projectId) {
    console.log('Opening project modal for:', projectId);
    
    const modal = document.getElementById('project-modal');
    const project = projectsData[projectId];
    
    // Error handling
    if (!modal) {
        console.error('Modal element not found!');
        return;
    }
    
    if (!project) {
        console.error('Project data not found for ID:', projectId);
        alert('Project details not available. Please try again.');
        return;
    }
    
    try {
        // Populate modal content
        const titleEl = document.getElementById('modal-title');
        const metaEl = document.getElementById('modal-meta');
        const descEl = document.getElementById('modal-description');
        const galleryEl = document.getElementById('modal-gallery');
        const actionsEl = document.getElementById('modal-actions');
        
        // Check if all elements exist
        if (!titleEl || !metaEl || !descEl || !galleryEl || !actionsEl) {
            console.error('Modal elements not found');
            return;
        }
        
        // Set title
        titleEl.textContent = project.title;
        
        // Add tags with stagger effect
        const metaHTML = project.tags.map((tag, index) => 
            `<span class="tag" style="animation-delay: ${0.3 + index * 0.1}s">${tag}</span>`
        ).join('');
        metaEl.innerHTML = metaHTML;
        
        // Add description
        descEl.innerHTML = project.description;
        
        // Add gallery images with stagger effect
        const galleryHTML = project.images.map((img, index) => `
            <a href="${img}" class="modal-gallery-item glightbox" style="animation: galleryItemFadeIn 0.6s ease-out ${0.5 + index * 0.1}s both;">
                <img src="${img}" alt="${project.title}" loading="lazy">
            </a>
        `).join('');
        galleryEl.innerHTML = galleryHTML;
        
        // Add action buttons
        const actionsHTML = `
            <a href="${project.liveUrl}" target="_blank" class="btn-primary">
                View Live in FlutterFlow →
            </a>
            <button onclick="closeProjectModal()" class="btn-secondary">
                Close
            </button>
        `;
        actionsEl.innerHTML = actionsHTML;
        
        // Show modal with smooth animation
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Scroll to top of modal
        setTimeout(() => {
            modal.scrollTop = 0;
        }, 100);
        
        // Reinitialize GLightbox for modal images
        setTimeout(() => {
            try {
                const modalLightbox = GLightbox({
                    selector: '.modal-gallery-item',
                    touchNavigation: true,
                    loop: true,
                    autoplayVideos: true,
                    skin: 'clean',
                });
            } catch (error) {
                console.warn('GLightbox initialization failed:', error);
            }
        }, 300);
        
        // Animate tags with stagger
        setTimeout(() => {
            try {
                gsap.from('.modal-meta .tag', {
                    opacity: 0,
                    y: 20,
                    scale: 0.8,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                });
            } catch (error) {
                console.warn('GSAP animation failed:', error);
            }
        }, 300);
        
        console.log('Modal opened successfully for:', projectId);
        
    } catch (error) {
        console.error('Error opening modal:', error);
        alert('An error occurred. Please refresh the page and try again.');
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    
    gsap.to('.modal-content', {
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        },
    });
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Make functions globally accessible
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// Verify modal elements on page load
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalElements = {
        modal: modal,
        title: document.getElementById('modal-title'),
        meta: document.getElementById('modal-meta'),
        description: document.getElementById('modal-description'),
        gallery: document.getElementById('modal-gallery'),
        actions: document.getElementById('modal-actions')
    };
    
    // Check if all elements exist
    let allElementsExist = true;
    for (const [key, element] of Object.entries(modalElements)) {
        if (!element) {
            console.error(`Modal element missing: ${key}`);
            allElementsExist = false;
        }
    }
    
    if (allElementsExist) {
        console.log('✅ All modal elements loaded successfully!');
        console.log('✅ Project modal system ready!');
        console.log('📁 Available projects:', Object.keys(projectsData));
    } else {
        console.error('❌ Some modal elements are missing. Modal may not work properly.');
    }
});

// Log that functions are ready
console.log('Project modal functions loaded and ready!');

// ================================================
// SMOOTH REVEAL ON SCROLL
// ================================================

const revealElements = document.querySelectorAll('.project-card, .showcase-item, .stat-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ================================================
// CONSOLE SIGNATURE
// ================================================

console.log(
    '%c👋 Hey there! ',
    'background: linear-gradient(135deg, #5D5FEF, #00C6FF); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;'
);
console.log(
    '%cLooking for a creative developer? Let\'s connect!',
    'color: #5D5FEF; font-size: 14px; font-weight: 600;'
);
console.log(
    '%c📧 samuel@impeldown.dev | 🌐 samuel.impeldown.dev',
    'color: #00C6FF; font-size: 12px;'
);
console.log(
    '%c✨ Portfolio enhanced and ready for launch!',
    'color: #00C6FF; font-size: 12px; font-weight: 600;'
);

