function makeExperienceElement(experience) {
    const container = document.createElement('div');
    container.className = 'experience-card';

    const img = document.createElement('img');
    img.className = 'experience-card__picture';
    img.src = experience.image;
    img.alt = `${experience.name} image`;
    container.appendChild(img);

    const content = document.createElement('div');
    content.className = 'experience-card__content';

    const title = document.createElement('h3');
    title.className = 'experience-card__title';
    title.textContent = experience.name;

    const description = document.createElement('p');
    description.className = 'experience-card__description';
    description.textContent = experience.description;

    const footer = document.createElement('div');
    footer.className = 'experience-card__footer';

    const dateSpan = document.createElement('span');
    dateSpan.className = 'experience-card__date';
    dateSpan.textContent = experience.date;

    const separator = document.createTextNode(' | ');

    const locationSpan = document.createElement('span');
    locationSpan.className = 'experience-card__location';
    locationSpan.textContent = experience.location;

    footer.append(dateSpan, separator, locationSpan);

    content.append(title, description, footer);

    container.append(content);

    return container;
}

export function loadExperiences() {
    fetch('assets/data/experiences.json')
        .then((response) => response.json())
        .then((experiences) => {
            const experienceListElement =
                document.querySelector('.experiences__list');

            while (experienceListElement.firstChild) {
                experienceListElement.removeChild(
                    experienceListElement.firstChild
                );
            }

            experiences.forEach((experience) => {
                const element = makeExperienceElement(experience);
                experienceListElement.append(element);
            });
        });
}
