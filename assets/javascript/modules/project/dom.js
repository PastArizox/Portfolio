export function makeProjectElement(project) {
    const projectElement = document.createElement('a');
    projectElement.classList.add('project');
    projectElement.href = project.link;
    projectElement.target = '_blank';

    const picture = document.createElement('img');
    picture.classList.add('project__picture');
    picture.src = project.image;
    picture.alt = `${project.name} Image`;

    const content = document.createElement('div');
    content.classList.add('project__content');

    const title = document.createElement('h3');
    title.textContent = project.name;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = project.description;

    const footer = document.createElement('div');
    footer.classList.add('project__footer');

    const date = document.createElement('p');
    date.classList.add('project__date');
    date.textContent = project.date;

    const languages = document.createElement('p');
    languages.classList.add('project__languages');
    languages.textContent = project.langages.join(', ');

    const githubLogo = document.createElement('img');
    githubLogo.classList.add('project__github-logo');
    githubLogo.src = 'assets/logo/socials/github.svg';
    githubLogo.alt = 'Github logo';

    footer.append(date, languages, githubLogo);
    content.append(title, description, footer);
    projectElement.append(picture, content);

    return projectElement;
}
