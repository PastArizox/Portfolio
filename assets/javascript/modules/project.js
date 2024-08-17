function makeProjectElement(project) {
    const projectElement = `
    <a class="project" href="${project.link}" target="_blank">
        <img
            class="project__picture"
            src="${project.image}"
            alt="${project.name} Image"
        />
        <div class="project__content">
            <h3>${project.name}</h3>
            <p class="description">
                ${project.description}
            </p>
            <div class="project__footer">
                <p class="project__date">${project.date}</p>
                <p class="project__languages">
                ${project.langages.map((langage) => langage).join(', ')}
                </p>
                <img
                    class="project__github-logo"
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
                document.querySelector('.projects__list');

            const projectElements = projects.map((project) =>
                makeProjectElement(project)
            );

            projectListElement.innerHTML = projectElements.join('');
        });
}
