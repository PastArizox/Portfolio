import { initProjects } from './logic.js';

export function loadProjects() {
    // fetch('assets/data/projects.json')
    //     .then((response) => response.json())
    //     .then((projects) => {
    //         const projectListElement =
    //             document.querySelector('.projects__list');

    //         initProjects(projectListElement, projects);
    //     });

    fetch(
        'https://api.github.com/users/PastArizox/repos?sort=created&direction=desc'
    )
        .then((response) => response.json())
        .then((projects) => {
            const projectListElement =
                document.querySelector('.projects__list');

            initProjects(projectListElement, projects);

            console.log(projects[0]);
        })
        .catch((error) => {
            console.error('Error fetching GitHub projects:', error);
        });
}
