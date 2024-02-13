const botonNo = document.querySelector('.button-no');
const botonSi = document.querySelector('.button-yes');
const gif = document.querySelector('.gif')
const title = document.querySelector('.title')

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = Math.random() * 4 + 3 + 's';
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

let i = 0;

botonNo.addEventListener('click', (e) => {
    i++
    const texto = e.target.textContent;
    if (i === 1) {
        e.target.textContent = 'Estas segura? 😬'
        gif.setAttribute('src', './imagenes/gato1.gif')
    } else if (i === 2) {
        e.target.textContent = 'Muy muy muy segura? 🥹'
        gif.setAttribute('src', './imagenes/gato2.gif')
    } else if (i === 3) {
        e.target.textContent = 'Demasiado segura? 😿'
        gif.setAttribute('src', './imagenes/gato3.gif')
    } else if (i === 4) {
        e.target.textContent = 'No tienes otra opción, dale que sí 😚'
        gif.setAttribute('src', './imagenes/gato4.gif')
    } else if (i === 5) {
        e.target.textContent = 'Lo digo enserio ❤️'
        gif.setAttribute('src', './imagenes/gato5.gif')
    } else if (i === 6) {
        e.target.textContent = 'ya deja de intentar XD'
        gif.setAttribute('src', './imagenes/gato6.gif')
    }
})

botonSi.addEventListener('click', (e) => {
    gif.setAttribute('src', './imagenes/teamo.gif')
    title.style.fontSize = '30px'
    title.style.color = 'red'
    title.textContent = `TE AMO MUCHO YADIRA ❤️❤️❤️`

    // Generar corazones
    for (let i = 0; i < 100; i++) {
        createHeart();
    }
})
