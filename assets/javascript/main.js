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

fetch('assets/data/experiences.json')
    .then((response) => response.json())
    .then((experiences) => {
        const experienceListElement =
            document.querySelector('#experiences .list');

        experiences.forEach((experience) => {
            const experienceElement = `
            <div class="experience">
                <img
                    src="${experience.image}"
                    alt="${experience.name} image"
                />
                <div class="content">
                    <h3 class="title">${experience.name}</h3>
                    <p class="description">
                        ${experience.description}
                    </p>
                    <div class="footer">
                        <span>${experience.date}</span> | 
                        <span>${experience.location}</span>
                    </div>
                </div>
            </div>
            `;

            experienceListElement.innerHTML += experienceElement;
        });
    });

fetch('assets/data/contacts.json')
    .then((response) => response.json())
    .then((contacts) => {
        const contactListElement = document.querySelector(
            '#contacts .container .list'
        );

        contacts.forEach((contact) => {
            const contactElement = `
            <div class="contact">
                <a href="${contact.url}" target="_blank">
                    <img
                        src="${contact.image}"
                        alt="${contact.name} image"
                    />
                </a>
                <span>${contact.name}</span>
            </div>
            `;

            contactListElement.innerHTML += contactElement;
        });
    });

function initBurgerButton() {
    const burgerButton = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar ul');

    burgerButton.addEventListener('click', () => {
        navbar.style.display = navbar.style.display == '' ? 'flex' : '';
    });
}

initBurgerButton();
