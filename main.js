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
