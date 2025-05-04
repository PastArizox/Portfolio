import { initProjects } from './logic.js';

export function loadProjects() {
    fetch(
        'https://api.github.com/users/PastArizox/repos?sort=created&direction=desc'
    )
        .then((response) => response.json())
        .then((projects) => {
            const projectListElement =
                document.querySelector('.projects__list');

            initProjects(projectListElement, projects);
        })
        .catch((error) => {
            console.error('Error fetching GitHub projects:', error);
        });
}
