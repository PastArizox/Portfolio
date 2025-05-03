import {
    makeSkillListElement,
    makeCategoryButton
} from './dom.js';

export function initCategories(container, categoryNames) {
    container.innerHTML = categoryNames.map(makeCategoryButton).join('');
}

export function initSkills(container, skills) {
    container.innerHTML = Object.entries(skills)
        .map(([categoryName, skillList]) => makeSkillListElement(skillList, categoryName))
        .join('');
}

export function initSkillsAnimation(menuElements) {
    menuElements.forEach((category) => {
        category.addEventListener('click', (event) => {
            event.preventDefault();

            menuElements.forEach((el) =>
                el.classList.remove('skills__category--active')
            );
            category.classList.add('skills__category--active');

            const name = category.dataset.category;
            const allLists = document.querySelectorAll('.skills__list');
            allLists.forEach((el) => (el.style.display = 'none'));

            const visibleList = document.querySelector(`.skills-table__content .${name}`);
            if (visibleList) visibleList.style.display = 'grid';
        });
    });
}
