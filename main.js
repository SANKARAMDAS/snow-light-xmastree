const xlights = document.querySelectorAll('.xlight');
const toggleButton = document.getElementById('togglebutton');

let lightsOn = true;

toggleButton.addEventListener('click',() => {
    lightsOn = !lightsOn;

    xlights.forEach((xlight) => {
        xlight.style.animation = lightsOn ? 'twinkle 1.5s infinite' : 'none';
        xlight.style.boxShadow = lightsOn ? '' : 'none';
        xlight.style.opacity = lightsOn ? '1' : '.3' //when lights are off, set opacity
    })

    toggleButton.textContent = lightsOn ? 'Turn off Lights' : 'Turn on Lights';
    toggleButton.style.backgroundColor = lightsOn ? 'yellow' : 'red';
    toggleButton.style.color = lightsOn ? 'blue' : 'white';
})

//Snowfall Effect
const snowContainer =document.querySelector('.snow-container');

function createSnowEffect() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 5000)
}

setInterval(createSnowEffect, 200)
