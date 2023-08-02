const container = document.querySelector('.container');

function grid () {
    for (let i = 0; i < 16; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        for (let j = 0; j < 16; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            line.appendChild(block);
        }
        container.appendChild(line);
    }
}
grid();
const blocks = document.querySelectorAll('.block');
blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.classList.add('colourBlock');
    });
});