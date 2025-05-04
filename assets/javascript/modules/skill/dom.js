export function makeSkillElement(skill) {
    const anchor = document.createElement('a');
    anchor.href = skill.url;
    anchor.className = 'skill';

    const img = document.createElement('img');
    img.className = 'skill__logo';
    img.src = skill.icon;
    img.alt = `${skill.name} logo`;

    const span = document.createElement('span');
    span.className = 'skill__title';
    span.textContent = skill.name;

    anchor.appendChild(img);
    anchor.appendChild(span);

    return anchor;
}

export function makeSkillListElement(skills, categoryName) {
    const container = document.createElement('div');
    container.className = `skills__list fade-in ${categoryName}`;

    skills.forEach((skill) => {
        container.appendChild(makeSkillElement(skill));
    });

    return container;
}

export function makeCategoryButton(categoryName) {
    const label = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'skills__category';
    anchor.dataset.category = categoryName;
    anchor.textContent = label;

    return anchor;
}
