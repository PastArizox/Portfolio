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
    <div class="list fade-in ${categoryName}">
        ${skillElements}
    </div>
    `;
}

// Show/Hide Skills

const skillCategories = document.querySelectorAll(
    '#skills .table .menu .category'
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
            document.querySelector('#skills .table .content').innerHTML +=
                skillListElement;
        });
    })
    .then(() => {
        skillCategories[0].click();
    });

fetch('assets/data/projects.json')
    .then((response) => response.json())
    .then((projects) => {
        const projectListElement = document.querySelector('#projects .list');

        projects.forEach((project) => {
            const projectElement = `
            <a class="project" href="${project.link}" target="_blank">
                <img
                    src="${project.image}"
                    alt="${project.name} Image"
                />
                <div class="content">
                    <h3>${project.name}</h3>
                    <p class="description">
                        ${project.description}
                    </p>
                    <div class="footer">
                        <p>${project.date}</p>
                        <p>
                        ${project.langages.map((langage) => langage).join(', ')}
                        </p>
                        <img
                            src="https://place-hold.it/25x25"
                            alt="Github logo"
                        />
                    </div>
                </div>
            </a>
            `;

            projectListElement.innerHTML += projectElement;
        });
    });
