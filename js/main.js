/* ============================================================
   ZIM.ca — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== AOS (Animate on Scroll) =====
    AOS.init({
        duration: 800,
        easing: 'ease-out-quart',
        once: true,
        offset: 80,
        delay: 0,
        anchorPlacement: 'top-bottom',
    });

    // ===== Scroll Progress Bar =====
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = pct + '%';
    }, { passive: true });

    // ===== Scroll fade-in reveal =====
    const revealEls = document.querySelectorAll(
        '.feature-card, .amenity-item, .unit-card, .nearby-item, .faq-item, .stat-item, ' +
        '.section-header, .room-card, .neighbourhood, .house-rules, .nb-item, ' +
        '.gallery-item, .testimonial-card, .contact-info, .contact-form-wrap, ' +
        '.location-layout, .footer-brand, .footer-links, .footer-contact, .footer-cta-box, ' +
        '.include-item, .rule-item, .email-step, .contact-detail, .urgency-box'
    );
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else {
                entry.target.classList.remove('revealed');
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => { el.classList.add('will-reveal'); revealObserver.observe(el); });

    // ===== Graceful image fallbacks =====
    // Gallery items — show styled placeholder if image missing
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('error', () => {
            img.closest('.gallery-item').classList.add('img-missing');
        });
        // Also check if already broken (cached state)
        if (img.complete && img.naturalWidth === 0) {
            img.closest('.gallery-item').classList.add('img-missing');
        }
    });
    // Unit card images — already handled via onerror + .no-img in HTML

    // ===== Light / Dark Mode Toggle =====
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon   = document.getElementById('themeIcon');
    const savedTheme  = localStorage.getItem('zimTheme');

    if (savedTheme === 'dark') applyDark();
    else applyLight();

    themeToggle.addEventListener('click', () => {
        document.body.classList.contains('light') ? applyDark() : applyLight();
    });

    function applyLight() {
        document.body.classList.add('light');
        themeIcon.className = 'fas fa-moon';
        themeToggle.title = 'Toggle dark mode';
        localStorage.setItem('zimTheme', 'light');
    }
    function applyDark() {
        document.body.classList.remove('light');
        themeIcon.className = 'fas fa-sun';
        themeToggle.title = 'Toggle light mode';
        localStorage.setItem('zimTheme', 'dark');
    }

    // ===== Sticky Nav =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 48);
    }, { passive: true });

    // ===== Mobile Menu =====
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });

    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - navH,
                behavior: 'smooth',
            });
        });
    });

    // ===== Animated Counters =====
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = 'true';
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.6 });
    counters.forEach(c => counterObserver.observe(c));

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const startTime = performance.now();
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
        };
        requestAnimationFrame(update);
    }

    // ===== FAQ Accordion =====
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    // ===== Swiper — Testimonials =====
    new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 5500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    // ===== GLightbox — Gallery =====
    GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });

    // ===== Contact Form =====
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' },
                });

                if (response.ok) {
                    form.style.display = 'none';
                    formSuccess.classList.add('visible');
                } else {
                    throw new Error('Server error');
                }
            } catch {
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                let errMsg = form.querySelector('.form-error');
                if (!errMsg) {
                    errMsg = document.createElement('p');
                    errMsg.className = 'form-error';
                    errMsg.style.cssText = 'color:#ef4444;font-size:0.85rem;text-align:center;margin-top:10px;';
                    btn.insertAdjacentElement('afterend', errMsg);
                }
                errMsg.textContent = 'Something went wrong — please email us directly at info@homyspot.com';
            }
        });
    }

    // ===== Active Nav Link on Scroll =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.35 });
    sections.forEach(s => sectionObserver.observe(s));

    // ===== Room Thumbnail Switcher with fade (Unit A) =====
    function switchImage(imgEl, newSrc, thumbEls, clickedThumb) {
        if (imgEl.src.includes(newSrc.split('/').pop())) return;
        imgEl.classList.add('fading');
        thumbEls.forEach(t => t.classList.remove('active'));
        clickedThumb.classList.add('active');
        setTimeout(() => {
            imgEl.src = newSrc;
            imgEl.onload = () => imgEl.classList.remove('fading');
        }, 200);
    }

    document.querySelectorAll('.room-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            switchImage(
                document.getElementById('roomMainImg'),
                thumb.dataset.src,
                document.querySelectorAll('.room-thumb'),
                thumb
            );
        });
    });

    // ===== Room Thumbnail Switcher with fade (Unit B) =====
    document.querySelectorAll('.room-thumb-b').forEach(thumb => {
        thumb.addEventListener('click', () => {
            switchImage(
                document.getElementById('roomMainImgB'),
                thumb.dataset.src,
                document.querySelectorAll('.room-thumb-b'),
                thumb
            );
        });
    });

    // ===== Subtle Parallax on Hero Orbs =====
    const orbs = document.querySelectorAll('#hero .hero-orb');
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        orbs.forEach((orb, i) => {
            orb.style.transform = `translateY(${y * (0.08 + i * 0.04)}px)`;
        });
    }, { passive: true });

});
