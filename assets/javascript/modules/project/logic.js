import { makeProjectElement } from './dom.js';

export function initProjects(container, projects) {
    container.append(...projects.map(makeProjectElement));
}
