import { makeSkillListElement, makeCategoryButton } from './dom.js';

export function initCategories(container, categoryNames) {
    container.append(...categoryNames.map(makeCategoryButton));
}

export function initSkills(container, skills) {
    container.append(
        ...Object.entries(skills).map(([categoryName, skillList]) =>
            makeSkillListElement(skillList, categoryName)
        )
    );
}

export function initSkillsAnimation(menuElements) {
    menuElements.forEach((category) => {
        category.addEventListener('click', (event) => {
            event.preventDefault();

            menuElements.forEach((element) =>
                element.classList.remove('skills__category--active')
            );
            category.classList.add('skills__category--active');

            const name = category.dataset.category;
            const allLists = document.querySelectorAll('.skills__list');
            allLists.forEach((element) => (element.style.display = 'none'));

            const visibleList = document.querySelector(
                `.skills-table__content .${name}`
            );
            if (visibleList) visibleList.style.display = 'grid';
        });
    });
}
