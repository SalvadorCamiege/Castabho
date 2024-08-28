// script.js menu hamburguer

let ul = window.document.querySelector('nav .ul');
function openMenu(){
       ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = `${value}%`;
    });
});
