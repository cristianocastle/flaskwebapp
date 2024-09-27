// Function to create and animate a snowflake
function createSnowflake() {
    // Create a snowflake
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

    document.body.appendChild(snowflake);

    // Animate the snowflake
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
        // Remove the snowflake from the DOM
        snowflake.remove();
    };
}

// Start the snowfall
createSnowflake();
setInterval(createSnowflake, 400);