function newSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '&#10052;'; // Unicode for snowflake character
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 10 + 10 + 's'; // Slower fall
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 20000); // Adjusted timeout to match slower fall
}

setInterval(newSnowflake, 100);