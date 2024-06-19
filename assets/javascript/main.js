function makeSkillElement({ url: href, icon: src, name }) {
    return `
    <a href="${href}" class="skill">
        <img
            src="${src}"
            alt="${name ? name : 'Unknown'} logo"
        />
        <span>${name ? name : 'Unknown'}</span>
    </a>
    `;
}

function makeSkillListElement(skills) {
    let skillElements = '';

    skills.forEach((skill) => {
        skillElements += `${makeSkillElement(skill)}\n`;
    });

    return `
    <div class="list">
        ${skillElements}
    </div>
    `;
}

fetch('assets/data/skills/tools.json')
    .then((response) => response.json())
    .then((tools) => {
        const skillListElement = makeSkillListElement(tools);
        document.querySelector('.skills .table .content').innerHTML =
            skillListElement;
    });
