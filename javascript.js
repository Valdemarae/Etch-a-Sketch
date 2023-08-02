const container = document.querySelector('.container');

function grid (number) {
    for (let i = 0; i < number; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        for (let j = 0; j < number; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            line.appendChild(block);
        }
        container.appendChild(line);
    }
    addColour();
}
function addColour () {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.classList.add('colourBlock');
            block.style.backgroundColor = `aquamarine`;
        });
    });
}
function randomRgb () {
    return Math.floor(Math.random() * 256);
}
function addColourRgb () {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.classList.add('colourBlock');
            block.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
        });
    });
}
grid(16);
const button = document.querySelector('.changeNumber');
button.addEventListener('click', () => {
    let number = prompt('How much squares per side would you want grid to have? Max 100.');
    while (number < 1 || number > 100 || isNaN(number)) {
        if (number == null || number == "") {
            number = 16;
            break;
        }
        number = prompt('INVALID INPUT! Try again.');
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    grid(number);
});
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const toRemoveAll = document.querySelectorAll('.block');
    for (toRemoveOne of toRemoveAll) {
        if (toRemoveOne.classList.contains('colourBlock')) {
            toRemoveOne.classList.remove('colourBlock');
            toRemoveOne.style.backgroundColor = `antiquewhite`;
        }
    }
});

const rgb = document.querySelector('.rgb');
rgb.addEventListener('click', () => addColourRgb());

const aquamarine = document.querySelector('.aquamarine');
aquamarine.addEventListener('click', () => addColour());
