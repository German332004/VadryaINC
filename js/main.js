// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // --- Preloader Mejorado ---
const preloader = document.querySelector('.preloader');
const preloaderPercentage = document.querySelector('.preloader-percentage');

if (preloader) {
    // Mostrar preloader inmediatamente
    preloader.style.display = 'flex';
    
    // Simular progreso de carga
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        if (preloaderPercentage) {
            preloaderPercentage.textContent = `${Math.round(progress)}%`;
        }
        
        if (progress === 100) {
            clearInterval(progressInterval);
        }
    }, 200);
    
    window.addEventListener('load', function() {
        // Esperar un mínimo de 2 segundos para asegurar que se vea el preloader
        setTimeout(function() {
            if (preloaderPercentage) {
                preloaderPercentage.textContent = '100%';
            }
            
            setTimeout(function() {
                preloader.classList.add('loaded');
                
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 800);
            }, 500);
        }, 2000);
    });
    
    // Fallback: ocultar después de 5 segundos máximo
    setTimeout(function() {
        if (!preloader.classList.contains('loaded')) {
            preloader.classList.add('loaded');
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 800);
        }
    }, 5000);
}

    // --- Cursor ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    if (cursorDot && cursorOutline) {
        document.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: 'forwards' });
        });
        const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.borderWidth = '1px';
            });
            element.addEventListener('mouseleave', function() {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.borderWidth = '2px';
            });
        });
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Animate on Scroll ---
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (elementPosition < screenPosition) {
                element.classList.add('aos-animate');
            }
        });
    };

    // --- Stats Counter ---
    const startCounters = function() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = Math.ceil(target / speed);
            if (count < target) {
                counter.innerText = Math.min(count + increment, target);
                setTimeout(startCounters, 1);
            }
        });
    };
    const statsSection = document.querySelector('.stats');
    let counted = false;
    const checkCounters = function() {
        if (!statsSection) return;
        const statsPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (statsPosition < screenPosition && !counted) {
            startCounters();
            counted = true;
        }
    };

    // --- Particles ---
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 700,
                    density: {
                        enable: true,
                        value_area: 1400
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1.2
                },
                move: {
                    enable: true,
                    speed: 0.9,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: false,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 160,
                        line_linked: {
                            opacity: 0.2
                        }
                    },
                    push: {
                        particles_nb: 0
                    }
                }
            },
            retina_detect: true
        });
    }

    window.addEventListener('scroll', function() {
        animateOnScroll();
        checkCounters();
    });
    animateOnScroll();

    // --- Language Switcher con Imágenes Locales ---
    function initLanguageSwitcher() {
        const langSwitcher = document.querySelector('.lang-switcher');
        const selectedLang = document.getElementById('selected-lang');
        const langList = document.querySelector('.lang-list');
        const langOptions = document.querySelectorAll('.lang-list li');

        // Cargar idioma guardado o usar ingles por defecto
        const defaultLang = localStorage.getItem('lang') || 'en';
        loadLanguage(defaultLang);
        updateSelectedLang(defaultLang);

        // Abrir/cerrar el selector
        if (selectedLang) {
            selectedLang.addEventListener('click', function(e) {
                e.stopPropagation();
                langList.classList.toggle('active');
                const icon = document.querySelector('.selected-lang i');
                if (icon) {
                    icon.style.transform = langList.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        }

        // Seleccionar un idioma
        if (langOptions) {
            langOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    loadLanguage(lang);
                    updateSelectedLang(lang);
                    localStorage.setItem('lang', lang);
                    langList.classList.remove('active');
                    const icon = document.querySelector('.selected-lang i');
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
            });
        }

        // Cerrar el selector al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (langSwitcher && !langSwitcher.contains(e.target)) {
                langList.classList.remove('active');
                const icon = document.querySelector('.selected-lang i');
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });

        // Ajustar para dispositivos táctiles
        if ('ontouchstart' in window) {
            document.querySelectorAll('.lang-list li').forEach(item => {
                item.style.cursor = 'pointer';
            });
        }
    }

    // Función para actualizar la visualización del idioma seleccionado
    function updateSelectedLang(lang) {
        const selectedLang = document.getElementById('selected-lang');
        const flagImg = selectedLang.querySelector('.flag-icon');
        const langText = selectedLang.querySelector('.lang-text');
        if (lang === 'en') {
            flagImg.src = 'assets/flags/us.svg';
            flagImg.alt = 'EN';
            langText.textContent = 'EN';
        } else if (lang === 'es') {
            flagImg.src = 'assets/flags/es.svg';
            flagImg.alt = 'ES';
            langText.textContent = 'ES';
        } else if (lang === 'pt') {
            flagImg.src = 'assets/flags/pt.svg';
            flagImg.alt = 'PT';
            langText.textContent = 'PT';
        }
    }

    // Función para cargar el idioma
    function loadLanguage(lang) {
        fetch(`lang/${lang}.json`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error loading language file: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const keys = el.getAttribute('data-i18n').split('.');
                    let text = data;
                    
                    for (let i = 0; i < keys.length; i++) {
                        if (text[keys[i]] === undefined) {
                            console.warn(`Translation key not found: ${el.getAttribute('data-i18n')}`);
                            text = '';
                            break;
                        }
                        text = text[keys[i]];
                    }
                    
                    if (text) {
                        el.textContent = text;
                    }
                });
                
                if (data.meta && data.meta.title) {
                    document.title = data.meta.title;
                }
            })
            .catch(error => {
                console.error('Error loading language file:', error);
            });
    }

    // Inicializar el selector de idiomas
    initLanguageSwitcher();
});