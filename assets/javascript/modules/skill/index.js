import {
    initCategories,
    initSkills,
    initSkillsAnimation
} from './logic.js';

export function loadSkills() {
    fetch('assets/data/skills.json')
        .then((response) => response.json())
        .then((skills) => {
            const categoryNames = Object.keys(skills);
            const menu = document.querySelector('.skills-table__menu');
            const content = document.querySelector('.skills-table__content');

            initCategories(menu, categoryNames);
            initSkills(content, skills);

            const menuElements = document.querySelectorAll('.skills__category');
            initSkillsAnimation(menuElements);

            if (menuElements.length > 0) menuElements[0].click();
        });
}
