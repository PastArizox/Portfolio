const skillCategories = document.querySelectorAll(
    '#skills .table .menu .category'
);

function initSkillsAnimation() {
    skillCategories.forEach((category) => {
        category.addEventListener('click', (event) => {
            event.preventDefault();

            skillCategories.forEach((category) => {
                category.classList.remove('active');
            });

            event.target.classList.add('active');

            const categoryName = event.target.getAttribute('data-category');
            const categoryElement = document.querySelector(
                `#skills .table .content .${categoryName}`
            );

            document
                .querySelectorAll('#skills .table .content .list')
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
            src="${skill.icon}"
            alt="${skill.name} logo"
        />
        <span>${skill.name}</span>
    </a>
    `;
}

function makeSkillListElement({ skills, categoryName }) {
    let skillElements = '';

    skills.forEach((skill) => {
        skillElements += `${makeSkillElement(skill)}\n`;
    });

    return `
    <div class="list fade-in ${categoryName}">
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

                document.querySelector('#skills .table .content').innerHTML +=
                    skillListElement;
            });
        })
        .then(() => {
            skillCategories[0].click();
        });
}
