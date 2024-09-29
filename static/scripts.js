

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

    document.body.appendChild(snowflake);

    let duration = Math.random() * 5 + 2;
    let sway = Math.random() * 100 - 50;

    let animation = snowflake.animate([
        { transform: `translateX(0px)`, top: '-50px', opacity: 1 },
        { transform: `translateX(${sway}px)`, top: '100%', opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    animation.onfinish = () => {
        snowflake.remove();
    };
}

createSnowflake();
setInterval(createSnowflake, 400);

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter-text');
    const text = textElement.innerHTML;
    textElement.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        } else {
            // Blink for 2 seconds after typing is complete
            setTimeout(() => {
                textElement.classList.add('hide-cursor');
            }, 2000);
        }
    }

    typeWriter();
});