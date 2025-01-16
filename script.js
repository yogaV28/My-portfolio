// Scroll Progress Bar Logic
document.addEventListener("scroll", () => {
    const progressBar = document.querySelector(".progress-bar");
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// Scroll Reveal Animations
ScrollReveal().reveal(".section", {
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    origin: "bottom",
    interval: 100,
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.section', {
        delay: 200,
        distance: '50px',
        duration: 600,
        opacity: 0,
        scale: 0.85,
        reset: true
    });
});


// Particles.js Initialization
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#2563eb" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#2563eb",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
});
