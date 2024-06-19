function makeSkillElement({ url: href, icon: src, name }) {
    return `
    <a href="${href}" class="skill">
        <img
            src="${src}"
            alt="${name ? name : 'Unknown'} logo"
        />
        <span>${name ? name : 'Unknown'}</span>
    </a>
    `;
}

function makeSkillListElement({ skills, categoryName }) {
    let skillElements = '';

    skills.forEach((skill) => {
        skillElements += `${makeSkillElement(skill)}\n`;
    });

    return `
    <div class="list ${categoryName}">
        ${skillElements}
    </div>
    `;
}

// Show/Hide Skills

const skillCategories = document.querySelectorAll(
    '.skills .table .menu .category'
);

skillCategories.forEach((category) => {
    category.addEventListener('click', (event) => {
        event.preventDefault();

        skillCategories.forEach((category) => {
            category.classList.remove('active');
        });

        event.target.classList.add('active');

        const categoryName = event.target.getAttribute('data-category');
        const categoryElement = document.querySelector(
            `.skills .table .content .${categoryName}`
        );

        document
            .querySelectorAll('.skills .table .content .list')
            .forEach((list) => {
                list.style.display = 'none';
            });

        categoryElement.style.display = 'grid';
    });
});

// Get Data

fetch('assets/data/skills.json')
    .then((response) => response.json())
    .then((skills) => {
        const categoryNames = Object.keys(skills);

        categoryNames.forEach((categoryName) => {
            const skillListElement = makeSkillListElement({
                skills: skills[categoryName],
                categoryName,
            });
            document.querySelector('.skills .table .content').innerHTML +=
                skillListElement;
        });
    })
    .then(() => {
        skillCategories[0].click();
    });
