let navLinks = document.querySelector('.mobile');
let body = document.querySelector('body');
let toggleMenu = document.querySelector('.open');
let toggleClose = document.querySelector('.close');

const menuBtn = () => {
    toggleMenu.style.display = 'none';
    toggleClose.style.display = 'inline-block';
    navLinks.style.display = 'flex';
    body.style.backgroundColor = 'hsl(233, 8%, 79%)'
}

toggleMenu.addEventListener('click', menuBtn);

const closeBtn = () => {
    toggleMenu.style.display = 'inline-block';
    toggleClose.style.display = 'none';
    navLinks.style.display = 'none';
    body.style.backgroundColor = 'white'
}

toggleClose.addEventListener('click', closeBtn);

