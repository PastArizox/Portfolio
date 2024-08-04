function makeExperienceElement(experience) {
    const experienceElement = `
    <div class="experience">
        <img
            src="${experience.image}"
            alt="${experience.name} image"
        />
        <div class="content">
            <h3 class="title">${experience.name}</h3>
            <p class="description">
                ${experience.description}
            </p>
            <div class="footer">
                <span>${experience.date}</span> | 
                <span>${experience.location}</span>
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
                document.querySelector('#experiences .list');

            const experienceElements = experiences.map((experience) =>
                makeExperienceElement(experience)
            );

            experienceListElement.innerHTML = experienceElements.join('');
        });
}
