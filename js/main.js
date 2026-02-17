/**
 * DNDC - EdTech Website
 * Main JavaScript File
 * Version: 1.0.0
 */

(function() {
    'use strict';

    // ===========================================
    // Global Variables
    // ===========================================
    let globe = null;
    let globeScene = null;
    let globeCamera = null;
    let globeRenderer = null;
    let globeAnimationFrame = null;

    // ===========================================
    // Preloader
    // ===========================================
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        
        setTimeout(() => {
            preloader.classList.add('hidden');
            
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 2000);
    });

    // ===========================================
    // Three.js Globe Setup
    // ===========================================
    function initGlobe() {
        if (!window.THREE) {
            console.error('Three.js not loaded');
            return;
        }

        const THREE = window.THREE;
        const canvas = document.getElementById('globe-canvas');
        const globeContainer = document.getElementById('floating-globe');
        
        if (!canvas || !globeContainer) return;

        const size = window.innerWidth < 768 ? 400 : 600;

        // Scene setup
        globeScene = new THREE.Scene();
        
        // Camera setup
        globeCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        globeCamera.position.z = 5;
        
        // Renderer setup
        globeRenderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        globeRenderer.setSize(size, size);
        globeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create outer sphere (wireframe)
        const sphereGeometry = new THREE.SphereGeometry(1.5, 48, 48);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x3b82f6,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        globeScene.add(sphere);

        // Create inner sphere
        const innerGeometry = new THREE.SphereGeometry(1.2, 36, 36);
        const innerMaterial = new THREE.MeshBasicMaterial({
            color: 0x60a5fa,
            wireframe: true,
            transparent: true,
            opacity: 0.35
        });
        const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
        globeScene.add(innerSphere);

        // Create particles
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 800;
        const positions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 6;
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x60a5fa,
            size: 0.025,
            transparent: true,
            opacity: 0.8
        });
        
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        globeScene.add(particles);

        // Animation loop
        let baseZ = 5;
        
        function animate() {
            globeAnimationFrame = requestAnimationFrame(animate);
            
            const scale = parseFloat(globeContainer.style.transform?.match(/scale\(([\d.]+)\)/)?.[1] || 1);
            globeCamera.position.z = baseZ / scale;
            
            sphere.rotation.y += 0.002;
            sphere.rotation.x += 0.001;
            innerSphere.rotation.y -= 0.003;
            particles.rotation.y -= 0.0008;
            
            globeRenderer.render(globeScene, globeCamera);
        }
        
        animate();

        // Store references for cleanup
        globe = {
            scene: globeScene,
            camera: globeCamera,
            renderer: globeRenderer,
            sphere: sphere,
            innerSphere: innerSphere,
            particles: particles
        };
    }


    // ================= Lead Modal =================
const modal = document.getElementById("lead-modal");
const closeBtn = document.getElementById("lead-close");

// Buttons
document.querySelectorAll(
  ".btn-primary, .cta-buttons .btn-primary, .cta-feature"
).forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (btn.hasAttribute("data-ignore-lead")) return;
    modal.classList.add("active");
  });
});


closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

// ================= Lead Form Submit =================
document.getElementById("lead-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("lead-name").value;
  const email = document.getElementById("lead-email").value;
  const phone = document.getElementById("lead-phone").value;

  try {
    const res = await fetch("https://dndc.onrender.com/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone })
    });

    if (!res.ok) throw new Error();

    showToast("🎉 Thanks! Our counselor will contact you shortly.", "success");
    modal.classList.remove("active");
    e.target.reset();

    const message = `
Hi DNDC 👋
I want free counseling.

Name: ${name}
Email: ${email}
Phone: ${phone}
`;

  const whatsappURL =
    "https://wa.me/916261437008?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

  } catch {
    showToast("❌ Something went wrong. Try again.", "error");
  }
});

    // ===========================================
    // Scroll Progress Bar
    // ===========================================
    function updateScrollProgress() {
        const scrollProgress = document.getElementById('scroll-progress');
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        
        if (scrollProgress) {
            scrollProgress.style.width = scrolled + '%';
        }
    }

    // ===========================================
    // Globe Parallax Effect
    // ===========================================
    function updateGlobePosition() {
        const scrolled = window.pageYOffset;
        const globeContainer = document.getElementById('floating-globe');
        const heroSection = document.querySelector('.hero-section');
        const transformSection = document.querySelector('.transform-section');
        const coursesSection = document.querySelector('.courses-section');
        
        if (!globeContainer || !heroSection) return;

        const heroHeight = heroSection.offsetHeight || 0;
        const transformTop = transformSection?.offsetTop || 0;
        const coursesTop = coursesSection?.offsetTop || 0;

        let position = {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
            left: '50%',
            top: '20%'
        };

        if (scrolled < heroHeight) {
            // Hero section
            const progress = scrolled / heroHeight;
            position = {
                y: progress * 600,
                x: -progress * 350,
                scale: 1 + progress * 0.8,
                opacity: 1,
                rotate: progress * 180,
                left: `${55 - progress * 35}%`,
                top: '10%'
            };
        } else if (scrolled >= heroHeight && scrolled < transformTop + 400) {
            // Transform section start
            position = {
                y: 600,
                x: -350,
                scale: 1.8,
                opacity: 0.95,
                rotate: 180,
                left: '15%',
                top: '20%'
            };
        } else if (scrolled >= transformTop + 400 && scrolled < coursesTop - 200) {
            // Transform to courses transition
            const progress = (scrolled - (transformTop + 400)) / ((coursesTop - 200) - (transformTop + 400));
            position = {
                y: 600 + progress * 500,
                x: -350 + progress * 350,
                scale: 1.8 - progress * 0.6,
                opacity: 0.95 - progress * 0.25,
                rotate: 180 + progress * 180,
                left: `${15 + progress * 35}%`,
                top: '20%'
            };
        } else if (scrolled >= coursesTop - 200) {
            // Courses section
            const pulseEffect = Math.sin(Date.now() * 0.001) * 0.1;
            position = {
                y: 1100,
                x: 0,
                scale: 1.2 + pulseEffect,
                opacity: 0.85,
                rotate: 360,
                left: '50%',
                top: '15%'
            };
        }

        globeContainer.style.transform = `
            translateY(${position.y}px) 
            translateX(${position.x}px) 
            rotateX(${position.rotate}deg) 
            scale(${position.scale})
        `;
        globeContainer.style.opacity = position.opacity;
        globeContainer.style.left = position.left;
        globeContainer.style.top = position.top;
    }

    // ===========================================
    // Intersection Observer for Animations
    // ===========================================
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // ===========================================
    // Stats Counter Animation
    // ===========================================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else {
                element.textContent = Math.floor(current) + (target >= 1000 ? '+' : '');
            }
        }, 16);
    }

    function setupStatsCounter() {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                    statsObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.stat-number[data-target]').forEach(counter => {
            statsObserver.observe(counter);
        });
    }

    // ===========================================
    // Navbar Scroll Effect
    // ===========================================
    function setupNavbar() {
        const navbar = document.getElementById('navbar');
        const navbarToggle = document.getElementById('navbar-toggle');
        const navbarMenu = document.getElementById('navbar-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });

        // Mobile menu toggle
        if (navbarToggle && navbarMenu) {
            navbarToggle.addEventListener('click', () => {
                navbarMenu.classList.toggle('active');
                
                // Animate hamburger
                const spans = navbarToggle.querySelectorAll('span');
                if (navbarMenu.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        }

        // Active link on scroll
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        navbarMenu?.classList.remove('active');
                    }
                }
            });
        });

        // Update active link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section[id]');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ===========================================
    // Back to Top Button
    // ===========================================
    function setupBackToTop() {
        const backToTop = document.getElementById('back-to-top');
        
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 500) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });

            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // ===========================================
    // Custom Cursor
    // ===========================================
    function setupCustomCursor() {
        if (window.innerWidth < 1024) return; // Only on desktop

        const cursor = document.querySelector('.custom-cursor');
        const cursorDot = document.querySelector('.custom-cursor-dot');

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Smooth follow effect
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Scale on hover
        document.querySelectorAll('a, button, .course-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = '#06b6d4';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = '#3b82f6';
            });
        });
    }

    // ===========================================
    // 3D Course Cards Effect
    // ===========================================
    function setup3DCourseCards() {
        const cards = document.querySelectorAll('.card-3d');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                if (window.innerWidth < 768) return; // Disable on mobile

                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });
    }

    // ===========================================
    // Energy Particles Animation
    // ===========================================
    function createEnergyParticles() {
        const container = document.querySelector('.energy-particles');
        if (!container) return;

        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 3 + 1.5;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: #3b82f6;
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.3};
                animation: energyFloat ${Math.random() * 18 + 12}s linear infinite;
                animation-delay: ${Math.random() * 8}s;
                box-shadow: 0 0 ${size * 3}px rgba(59, 130, 246, 0.6);
                filter: blur(0.5px);
            `;
            
            container.appendChild(particle);
        }

        // Add keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes energyFloat {
                0% {
                    transform: translateY(100vh) translateX(0) scale(0.5);
                    opacity: 0;
                }
                15% { opacity: 0.6; }
                85% { opacity: 0.6; }
                100% {
                    transform: translateY(-120vh) translateX(${Math.random() * 150 - 75}px) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===========================================
    // FAQ Accordion
    // ===========================================
    function setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // ===========================================
    // Testimonials Carousel
    // ===========================================
    function setupTestimonialsCarousel() {
        const track = document.querySelector('.testimonials-track');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        const dots = document.querySelectorAll('.carousel-dot');

        if (!track) return;

        let currentIndex = 0;
        const cards = track.querySelectorAll('.testimonial-card');
        const cardCount = cards.length / 2; // Divide by 2 because we have duplicates

        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth;
            const gap = 32; // 2rem gap
            track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;

            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % cardCount;
                updateCarousel();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + cardCount) % cardCount;
                updateCarousel();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        // Auto-play
        setInterval(() => {
            currentIndex = (currentIndex + 1) % cardCount;
            updateCarousel();
        }, 5000);
    }

    // ===========================================
    // Newsletter Form
    // ===========================================
    function setupNewsletterForm() {
        document.getElementById("newsletter-form").addEventListener("submit", async e => {
  e.preventDefault();

  const email = e.target.querySelector("input").value;

  try {
    const res = await fetch("https://dndc.onrender.com/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email })
});

if (!res.ok) {
  throw new Error("Subscribe failed");
}

showToast("📩 Check your email! Welcome to DNDC 🎉", "success");

    e.target.reset();

  } catch {
    showToast("❌ Subscription failed", "error");
  }
});

    }

    // ===========================================
    // Chatbot Widget
    // ===========================================
    function setupChatbot() {
        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotWindow = document.getElementById('chatbot-window');
        const chatbotClose = document.getElementById('chatbot-close');
        const chatbotSend = document.getElementById('chatbot-send');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotBody = document.getElementById('chatbot-body');

        if (chatbotToggle && chatbotWindow) {
            chatbotToggle.addEventListener('click', () => {
                chatbotWindow.classList.toggle('active');
                
                // Remove badge
                const badge = chatbotToggle.querySelector('.chatbot-badge');
                if (badge && chatbotWindow.classList.contains('active')) {
                    badge.style.display = 'none';
                }
            });
        }

        if (chatbotClose) {
            chatbotClose.addEventListener('click', () => {
                chatbotWindow.classList.remove('active');
            });
        }

        // Send message
   async function sendMessage() {
  const message = chatbotInput.value.trim();
  if (!message) return;

  addUserMessage(message);
  chatbotInput.value = "";

  try {
    const res = await fetch("https://dndc.onrender.com/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    addBotMessage(data.reply);

    // 🔥 AUTO OPEN WHATSAPP
    const encoded = encodeURIComponent(
      `Hi DNDC 👋 I want information about your courses.\n\nMy message: ${message}`
    );

    const whatsappURL = `https://wa.me/917000073787?text=${encoded}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 800);

  } catch {
    addBotMessage("Sure 😊 Call us at +91 7000073787. Opening WhatsApp...");

    const encoded = encodeURIComponent(
      `Hi DNDC 👋 I want information about your courses.\n\nMy message: ${message}`
    );

    window.open(`https://wa.me/917000073787?text=${encoded}`, "_blank");
  }
}


function addUserMessage(msg) {
  const div = document.createElement("div");
  div.className = "chatbot-message";
  div.innerHTML = `<div class="message-content" style="margin-left:auto">${msg}</div>`;
  chatbotBody.appendChild(div);
}

function addBotMessage(msg) {
  const div = document.createElement("div");
  div.className = "chatbot-message bot-message";
  div.innerHTML = `
    <div class="message-avatar"><i class="fas fa-robot"></i></div>
    <div class="message-content"><p>${msg}</p></div>`;
  chatbotBody.appendChild(div);
}


        if (chatbotSend) {
            chatbotSend.addEventListener('click', sendMessage);
        }

        if (chatbotInput) {
            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }

        // Quick action buttons
        const quickActions = document.querySelectorAll('.quick-action-btn');
        quickActions.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.textContent;
                chatbotInput.value = message;
                sendMessage();
            });
        });

     // ===========================================
// Auto WhatsApp after 15 seconds
// ===========================================

let whatsappTriggered = false;

setTimeout(() => {
  if (!whatsappTriggered) {

    whatsappTriggered = true;

    const encoded = encodeURIComponent(
      "Hi DNDC 👋 I am interested in your courses. Please guide me."
    );

    const whatsappURL = `https://wa.me/917000073787?text=${encoded}`;

    window.open(whatsappURL, "_blank");
  }

}, 15000); // 15 seconds


    }

    // ===========================================
    // Toast Notifications
    // ===========================================
    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = type === 'success' ? '✓' : '✕';
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-message">${message}</div>
        `;

        container.appendChild(toast);

        // Remove after 4 seconds
        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 4000);
    }

    // ===========================================
    // Dark Mode Toggle
    // ===========================================
    function setupDarkMode() {
   
const toggle = document.getElementById("dark-mode-toggle");
const icon = toggle.querySelector("i");

const savedTheme = localStorage.getItem("theme") || "dark";
document.body.setAttribute("data-theme", savedTheme);
icon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";

toggle.addEventListener("click", () => {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  const nextTheme = isDark ? "light" : "dark";

  document.body.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  icon.className = nextTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
});


    }

    // ===========================================
    // Smooth Scroll
    // ===========================================
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===========================================
    // Course Particles Animation
    // ===========================================
    function createCourseParticles() {
        const cards = document.querySelectorAll('.course-card');
        
        cards.forEach(card => {
            const particlesContainer = card.querySelector('.course-particles');
            if (!particlesContainer) return;

            for (let i = 0; i < 8; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: linear-gradient(to right, #3b82f6, #06b6d4);
                    border-radius: 50%;
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                    animation: floatParticle ${2 + Math.random() * 3}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 2}s;
                `;
                particlesContainer.appendChild(particle);
            }
        });

        // Add keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0%, 100% {
                    transform: translateY(0) translateX(0) scale(1);
                    opacity: 0;
                }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% {
                    transform: translateY(-100px) translateX(${Math.random() * 40 - 20}px) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===========================================
    // Performance Optimization
    // ===========================================
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

    // Throttle scroll events
    let scrollTicking = false;
    function handleScroll() {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                updateScrollProgress();
                updateGlobePosition();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }


    function setupAIRobot() {
  const wrapper = document.getElementById("ai-robot-wrapper");
  const canvas = document.getElementById("ai-robot-canvas");

  if (!wrapper || !canvas || !window.THREE) return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    35,
    wrapper.clientWidth / wrapper.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0.9, 1.9);
 camera.lookAt(0, 0.8, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });

  renderer.setClearColor(0x000000, 0);
  renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /* Lights */
 scene.add(new THREE.AmbientLight(0xffffff, 1.6));

const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
keyLight.position.set(2, 3, 4);
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
fillLight.position.set(-2, 1, 3);
scene.add(fillLight);

// helper: remove suspicious large ground planes
function removeLargePlanesFrom(scene) {
  const toRemove = [];
  scene.traverse(child => {
    if (child.isMesh) {
      const box = new THREE.Box3().setFromObject(child);
      const size = box.getSize(new THREE.Vector3());

      if ((size.x > 6 && size.z > 6 && size.y < 1.2) || size.x > 30) {
        toRemove.push(child);
      }
    }
  });
  toRemove.forEach(m => {
    if (m.parent) m.parent.remove(m);
  });
}

// helper: fit camera perfectly to model
function fitCameraToObject(camera, object, offset = 1.25) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  const maxSize = Math.max(size.x, size.y, size.z);
  const fov = THREE.MathUtils.degToRad(camera.fov);
  const distance = (maxSize / 2) / Math.tan(fov / 2) * offset;

  camera.position.set(center.x, center.y, center.z + distance);
  camera.lookAt(center);
  camera.updateProjectionMatrix();
}

  /* Load Robot */
 const loader = new THREE.GLTFLoader();
let robot;

loader.load("assets/robot.glb", (gltf) => {
  const model = gltf.scene || gltf.scenes[0];

  const wrapperGroup = new THREE.Group();
  wrapperGroup.add(model);
  scene.add(wrapperGroup);

  // Remove large background / floor meshes
  removeLargePlanesFrom(wrapperGroup);

  // Normalize position
  const box = new THREE.Box3().setFromObject(wrapperGroup);
  wrapperGroup.position.y -= box.min.y; // keep feet on ground

  // Scale nicely to fit widget
  const size = box.getSize(new THREE.Vector3());
  const maxSize = Math.max(size.x, size.y, size.z);
  const scale = 1.1 / maxSize;
  wrapperGroup.scale.setScalar(scale);

  // Fit camera to robot
  setTimeout(() => {
    fitCameraToObject(camera, wrapperGroup, 1.1);
  }, 50);

  robot = wrapperGroup;

  // cute hello motion
  setTimeout(() => {
    if (robot) {
      robot.rotation.y += Math.PI / 8;
      setTimeout(() => robot.rotation.y -= Math.PI / 16, 600);
    }
  }, 800);
}, undefined, (err) => {
  console.error("Robot load failed", err);
});

let waved = false;

setTimeout(() => {
  if (robot && !waved) {
    robot.rotation.y += Math.PI / 8;
    waved = true;
  }
}, 1200);

  const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  if (robot) {
    const t = Date.now() * 0.002;

    // Floating
    robot.position.y =  Math.sin(t) * 0.06;

    // Breathing tilt
    robot.rotation.x = Math.sin(t * 0.7) * 0.03;

    // Gentle sway
    robot.rotation.z = Math.sin(t * 0.5) * 0.02;
  }

  renderer.render(scene, camera);
}

window.addEventListener("mousemove", (e) => {
  if (!robot) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 0.6;
  const y = (e.clientY / window.innerHeight - 0.5) * 0.3;

  robot.rotation.y = x;
  robot.rotation.x += -y * 0.05;
});

const robotWrapper = wrapper;

robotWrapper.addEventListener("mouseenter", () => {
  if (!robot) return;
  robot.position.y += 0.18;
});

robotWrapper.addEventListener("mouseleave", () => {
  if (!robot) return;
  robot.position.y -= 0.18;
});




  animate();

  /* Resize safety */
  window.addEventListener("resize", () => {
    camera.aspect = wrapper.clientWidth / wrapper.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
  });

  /* Click → AI Tools Panel */
 wrapper.addEventListener("click", () => {
  if (!robot) return;

  robot.rotation.y += Math.PI / 6; // cute wave
  openAIToolsPanel();
});
}

function openAIToolsPanel() {
 const panel = document.getElementById("ai-tools-panel");
  panel.classList.add("active");
}
document.getElementById("ai-panel-close")
  .addEventListener("click", () => {
    document.getElementById("ai-tools-panel").classList.remove("active");
});

    // ===========================================
    // Initialize Everything
    // ===========================================
    function init() {
        console.log('🚀 Initializing DNDC Website...');

        
        // Wait for Three.js to load
        if (window.THREE) {
            initGlobe();
        } else {
            const checkThree = setInterval(() => {
                if (window.THREE) {
                    clearInterval(checkThree);
                    initGlobe();
                }
            }, 100);
        }
 
        // Setup all features
        setupScrollAnimations();
        setupStatsCounter();
        setupNavbar();
        setupBackToTop();
        setupCustomCursor();
        setup3DCourseCards();
        createEnergyParticles();
        setupFAQ();
        setupTestimonialsCarousel();
        setupNewsletterForm();
        setupAIRobot();
        setupChatbot();
        setupDarkMode();
        setupSmoothScroll();
        createCourseParticles();

        // Scroll handlers
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Resize handler
        window.addEventListener('resize', debounce(() => {
            if (globe && globe.renderer) {
                const size = window.innerWidth < 768 ? 400 : 600;
                globe.renderer.setSize(size, size);
            }
        }, 250));

          /* ================= Lead Modal Auto Open ================= */

const leadModal = document.getElementById("lead-modal");

if (leadModal) {
  setTimeout(() => {
    leadModal.classList.add("active");
    console.log("🎯 Lead modal auto-opened on page load");
  }, 3000);
}


        console.log('✅ DNDC Website initialized successfully!');
    }

    

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }



    // ===========================================
    // Cleanup on page unload
    // ===========================================
    window.addEventListener('beforeunload', () => {
        if (globeAnimationFrame) {
            cancelAnimationFrame(globeAnimationFrame);
        }
        if (globe && globe.renderer) {
            globe.renderer.dispose();
            if (globe.scene) {
                globe.scene.traverse(object => {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });
            }
        }
    });

})();