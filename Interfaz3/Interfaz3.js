function createStars() {
    const starsContainer = document.getElementById('stars');
    const totalStars = 200;
    const totalBrightStars = 15;

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random() * 0.8 + 0.2;

        starsContainer.appendChild(star);
    }

    for (let i = 0; i < totalBrightStars; i++) {
        const brightStar = document.createElement('div');
        brightStar.className = 'bright-star';

        const size = Math.random() * 6 + 4;
        brightStar.style.width = `${size}px`;
        brightStar.style.height = `${size}px`;
        brightStar.style.left = `${Math.random() * 100}%`;
        brightStar.style.top = `${Math.random() * 50}%`;
        brightStar.style.opacity = Math.random() * 0.5 + 0.5;
        brightStar.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px white`;

        starsContainer.appendChild(brightStar);
    }
}

function animateStars() {
    const stars = document.querySelectorAll('.star, .bright-star');

    stars.forEach(star => {
        if (Math.random() < 0.3) {
            const duration = Math.random() * 3 + 2;
            star.style.animation = `twinkle ${duration}s infinite alternate`;
        }
    });
}

window.onload = function () {
    createStars();
    animateStars();
};