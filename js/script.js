```javascript
// ANIMAÇÃO AO ROLAR A PÁGINA

const reveals = document.querySelectorAll('.reveal');

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }

    });

}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);


// PERMITE APENAS UMA MÚSICA TOCANDO POR VEZ

const players = document.querySelectorAll('.music-player');

players.forEach(player => {

    player.addEventListener('play', () => {

        players.forEach(otherPlayer => {

            if (otherPlayer !== player) {
                otherPlayer.pause();
            }

        });

    });

});


// EFEITO SUAVE NO BOTÃO WHATSAPP

const whatsappButton = document.querySelector('.whatsapp-float');

if (whatsappButton) {

    setInterval(() => {

        whatsappButton.style.transform = 'scale(1.1)';

        setTimeout(() => {
            whatsappButton.style.transform = 'scale(1)';
        }, 500);

    }, 3000);

}


// ROLAGEM SUAVE PARA LINKS INTERNOS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});
```

