const skillCategories = document.querySelectorAll(
    '.skills__table__menu__category'
);

function initSkillsAnimation() {
    skillCategories.forEach((category) => {
        category.addEventListener('click', (event) => {
            event.preventDefault();

            skillCategories.forEach((category) => {
                category.classList.remove(
                    'skills__table__menu__category--active'
                );
            });

            event.target.classList.add('skills__table__menu__category--active');

            const categoryName = event.target.getAttribute('data-category');
            const categoryElement = document.querySelector(
                `.skills__table__content .${categoryName}`
            );

            document
                .querySelectorAll('.skills__table__content__list')
                .forEach((list) => {
                    list.style.display = 'none';
                });

            categoryElement.style.display = 'grid';
        });
    });
}

function makeSkillElement(skill) {
    return `
    <a href="${skill.url}" class="skills__table__content__list__skill">
        <img
            class="skills__table__content__list__skill__logo"
            src="${skill.icon}"
            alt="${skill.name} logo"
        />
        <span class="skills__table__content__list__skill__title">
            ${skill.name}
        </span>
    </a>
    `;
}

function makeSkillListElement({ skills, categoryName }) {
    let skillElements = '';

    skills.forEach((skill) => {
        skillElements += `${makeSkillElement(skill)}\n`;
    });

    return `
    <div class="skills__table__content__list fade-in ${categoryName}">
        ${skillElements}
    </div>
    `;
}

export function loadSkills() {
    initSkillsAnimation();

    fetch('assets/data/skills.json')
        .then((response) => response.json())
        .then((skills) => {
            const categoryNames = Object.keys(skills);

            categoryNames.forEach((categoryName) => {
                const skillListElement = makeSkillListElement({
                    skills: skills[categoryName],
                    categoryName,
                });

                document.querySelector('.skills__table__content').innerHTML +=
                    skillListElement;
            });
        })
        .then(() => {
            skillCategories[0].click();
        });
}
