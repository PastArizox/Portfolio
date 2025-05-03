export function makeSkillElement(skill) {
    return `
        <a href="${skill.url}" class="skill">
            <img
                class="skill__logo"
                src="${skill.icon}"
                alt="${skill.name} logo"
            />
            <span class="skill__title">
                ${skill.name}
            </span>
        </a>
    `;
}

export function makeSkillListElement(skills, categoryName) {
    return `
        <div class="skills__list fade-in ${categoryName}">
            ${skills.map(makeSkillElement).join('\n')}
        </div>
    `
}


export function makeCategoryButton(categoryName) {
    const label = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    return `
        <a href="#" class="skills__category" data-category="${categoryName}">
            ${label}
        </a>
    `;
}
