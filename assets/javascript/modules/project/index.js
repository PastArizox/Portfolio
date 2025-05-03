import { initProjects } from "./logic.js";

export function loadProjects() {
    fetch('assets/data/projects.json')
        .then((response) => response.json())
        .then((projects) => {
            const projectListElement =
                document.querySelector('.projects__list');

            initProjects(projectListElement, projects);
        });
}
