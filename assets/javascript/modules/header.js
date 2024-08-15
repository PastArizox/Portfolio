function initBurgerButton() {
    const burgerButton = document.querySelector('.header__nav-bar__burger');
    const navbar = document.querySelector('.header__nav-bar__menu');

    burgerButton.addEventListener('click', () => {
        navbar.style.display = navbar.style.display == '' ? 'flex' : '';
    });
}

function initSelectedCategory() {
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll(
            '.header__nav-bar__menu__item__link'
        );
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
