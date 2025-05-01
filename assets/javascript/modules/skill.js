const skillCategories = document.querySelectorAll(
    '.skills__category'
);

function initSkillsAnimation() {
    skillCategories.forEach((category) => {
        category.addEventListener('click', (event) => {
            event.preventDefault();

            skillCategories.forEach((category) => {
                category.classList.remove(
                    'skills__category--active'
                );
            });

            event.target.classList.add('skills__category--active');

            const categoryName = event.target.getAttribute('data-category');
            const categoryElement = document.querySelector(
                `.skills-table__content .${categoryName}`
            );

            document
                .querySelectorAll('.skills-table__content__list')
                .forEach((list) => {
                    list.style.display = 'none';
                });

            categoryElement.style.display = 'grid';
        });
    });
}

function makeSkillElement(skill) {
    return `
    <a href="${skill.url}" class="skill">
        <img
            class="skill__logo"
            src="${skill.icon}"
            alt="${skill.name} logo"
        />
        <span class="skill__title">
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
    <div class="skills-table__content__list fade-in ${categoryName}">
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

                document.querySelector('.skills-table__content').innerHTML +=
                    skillListElement;
            });
        })
        .then(() => {
            skillCategories[0].click();
        });
}
