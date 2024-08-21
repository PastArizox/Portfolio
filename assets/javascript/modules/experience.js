function makeExperienceElement(experience) {
    const experienceElement = `
    <div class="experience-card">
        <img
            class="experience-card__picture"
            src="${experience.image}"
            alt="${experience.name} image"
        />
        <div class="experience-card__content">
            <h3 class="experience-card__title">${experience.name}</h3>
            <p class="experience-card__description">
                ${experience.description}
            </p>
            <div class="experience-card__footer">
                <span class="experience-card__date">
                    ${experience.date}
                </span>
                | 
                <span class="experience-card__location">
                    ${experience.location}
                </span>
            </div>
        </div>
    </div>
    `;

    return experienceElement;
}

export function loadExperiences() {
    fetch('assets/data/experiences.json')
        .then((response) => response.json())
        .then((experiences) => {
            const experienceListElement =
                document.querySelector('.experiences__list');

            const experienceElements = experiences.map((experience) =>
                makeExperienceElement(experience)
            );

            experienceListElement.innerHTML = experienceElements.join('');
        });
}
