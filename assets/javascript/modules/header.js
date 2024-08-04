function initBurgerButton() {
    const burgerButton = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar ul');

    burgerButton.addEventListener('click', () => {
        navbar.style.display = navbar.style.display == '' ? 'flex' : '';
    });
}

function initSelectedCategory() {
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.navbar ul li a');
        const sections = document.querySelectorAll('section');

        const changeLinkState = () => {
            let index = sections.length;

            while (
                --index &&
                window.scrollY + 50 < sections[index].offsetTop
            ) {}

            navLinks.forEach((link) => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        };

        changeLinkState();
        window.addEventListener('scroll', changeLinkState);
    });
}

export function initHeader() {
    initBurgerButton();
    initSelectedCategory();
}
