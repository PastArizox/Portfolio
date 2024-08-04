function makeProjectElement(project) {
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
                    src="assets/logo/socials/github.svg"
                    alt="Github logo"
                />
            </div>
        </div>
    </a>
    `;

    return projectElement;
}

export function loadProjects() {
    fetch('assets/data/projects.json')
        .then((response) => response.json())
        .then((projects) => {
            const projectListElement =
                document.querySelector('#projects .list');

            const projectElements = projects.map((project) =>
                makeProjectElement(project)
            );

            projectListElement.innerHTML = projectElements.join('');
        });
}
