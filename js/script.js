let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
    resetSlideTimer();
}

function currentSlideHandler(n) {
    currentSlide = n - 1;
    showSlide(currentSlide);
    resetSlideTimer();
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function startSlideTimer() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
}

function initSlideshow() {
    showSlide(currentSlide);
    startSlideTimer();
    
    document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    document.querySelector('.slideshow-container').addEventListener('mouseleave', () => {
        startSlideTimer();
    });
}

function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            galleryItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || categories === filter || categories.includes(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.sport-card, .achievement-card, .gallery-item, .stat-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initHoverEffects() {
    const cards = document.querySelectorAll('.sport-card, .achievement-card, .gallery-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initUploadZone() {
    const uploadZone = document.querySelector('.upload-zone');
    const uploadButtons = document.querySelectorAll('.upload-btn');
    
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '#1976d2';
        uploadZone.style.background = 'linear-gradient(135deg, #bbdefb, #90caf9)';
    });
    
    uploadZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '#2196F3';
        uploadZone.style.background = 'linear-gradient(135deg, #e3f2fd, #bbdefb)';
    });
    
    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '#2196F3';
        uploadZone.style.background = 'linear-gradient(135deg, #e3f2fd, #bbdefb)';
        
        const files = e.dataTransfer.files;
        handleFileUpload(files);
    });
    
    uploadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.multiple = true;
            input.accept = 'image/*,video/*';
            
            input.onchange = (e) => {
                handleFileUpload(e.target.files);
            };
            
            input.click();
        });
    });
}

function handleFileUpload(files) {
    if (files.length > 0) {
        alert(`${files.length} file(s) selected for upload. This is a demo - actual upload functionality would be implemented on the backend.`);
    }
}

function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);
    setActiveNav();
}

function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn, .social-btn, .upload-btn, .filter-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.slide-content');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

function initTypewriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    const titleText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < titleText.length) {
            heroTitle.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentImages = [];
    let currentIndex = 0;
    
    function updateImageList() {
        // Get all visible gallery images (respects current filter)
        currentImages = Array.from(document.querySelectorAll('.gallery-image'))
            .filter(img => {
                const galleryItem = img.closest('.gallery-item');
                return galleryItem && galleryItem.style.display !== 'none';
            });
    }
    
    // Add click listeners to all gallery images
    function addImageListeners() {
        const galleryImages = document.querySelectorAll('.gallery-image');
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                updateImageList();
                currentIndex = currentImages.indexOf(this);
                if (currentIndex !== -1) {
                    openLightbox();
                }
            });
        });
    }
    
    addImageListeners();
    
    function openLightbox() {
        if (currentImages.length > 0) {
            lightbox.classList.add('show');
            setTimeout(() => {
                showImage(currentIndex);
                lightbox.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
        }, 300);
    }
    
    function showImage(index) {
        if (currentImages[index]) {
            const img = currentImages[index];
            const galleryItem = img.closest('.gallery-item');
            const galleryInfo = galleryItem ? galleryItem.querySelector('.gallery-info') : null;
            
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            
            if (galleryInfo) {
                const title = galleryInfo.querySelector('h4');
                const description = galleryInfo.querySelector('p');
                lightboxTitle.textContent = title ? title.textContent : '';
                lightboxDescription.textContent = description ? description.textContent : '';
            } else {
                lightboxTitle.textContent = img.alt || 'Image';
                lightboxDescription.textContent = img.getAttribute('data-caption') || '';
            }
        }
    }
    
    function nextImage() {
        if (currentImages.length > 1) {
            currentIndex = (currentIndex + 1) % currentImages.length;
            showImage(currentIndex);
        }
    }
    
    function prevImage() {
        if (currentImages.length > 1) {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            showImage(currentIndex);
        }
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
    
    // Update image list when filters change
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(updateImageList, 100); // Small delay to ensure filter has been applied
        });
    });
}

function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            pointer-events: none;
            animation: ripple-animation 0.6s ease-out;
        }
        
        @keyframes ripple-animation {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .nav-link.active {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
    initMobileMenu();
    initGalleryFilter();
    initScrollAnimations();
    initSmoothScrolling();
    initHoverEffects();
    initUploadZone();
    initActiveNavigation();
    initButtonAnimations();
    initParallaxEffect();
    initTypewriterEffect();
    initLightbox();
    addRippleCSS();
});

window.changeSlide = changeSlide;
window.currentSlide = currentSlideHandler;