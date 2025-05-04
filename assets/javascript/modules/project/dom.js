export function makeProjectElement(project) {
    const projectElement = document.createElement('a');
    projectElement.classList.add('project');
    projectElement.href = project.html_url;
    projectElement.target = '_blank';

    const picture = document.createElement('img');
    picture.classList.add('project__picture');
    const img = new Image();
    img.onerror = () => {
        img.src = 'https://placehold.co/600x400?text=Aucune+image+disponible';
    };
    img.onload = () => {
        picture.src = img.src;
    };
    img.src = `./assets/picture/${project.name.toLowerCase()}.png`;
    picture.alt = `${project.name} Image`;

    const content = document.createElement('div');
    content.classList.add('project__content');

    const title = document.createElement('h3');
    title.classList.add('project__title');
    title.textContent = project.name;

    const description = document.createElement('p');
    description.classList.add('project__description');
    if (project.description) {
        description.textContent = project.description;
    } else {
        description.textContent =
            'Aucune description disponible pour ce projet.';
    }

    const footer = document.createElement('div');
    footer.classList.add('project__footer');

    const date = document.createElement('p');
    date.classList.add('project__date');
    date.textContent = project.created_at
        ? new Date(project.created_at).toLocaleDateString('fr-FR', {
              year: 'numeric',
          })
        : '----';

    const languages = document.createElement('p');
    languages.classList.add('project__languages');
    languages.textContent = project.language;

    const githubLogo = document.createElement('img');
    githubLogo.classList.add('project__github-logo');
    githubLogo.src = 'assets/logo/socials/github.svg';
    githubLogo.alt = 'Github logo';

    // footer.append(date, languages, githubLogo);
    footer.append(date, languages, githubLogo);
    content.append(title, description, footer);
    projectElement.append(picture, content);

    return projectElement;
}
