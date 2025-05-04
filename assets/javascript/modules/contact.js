function makeContactElement(contact) {
    const container = document.createElement('div');
    container.className = 'contact';

    const link = document.createElement('a');
    link.className = 'contact__link';
    link.href = contact.url;
    link.target = '_blank';

    const img = document.createElement('img');
    img.className = 'contact__logo';
    img.src = contact.image;
    img.alt = `${contact.name} image`;

    link.appendChild(img);
    container.appendChild(link);

    const span = document.createElement('span');
    span.textContent = contact.name;

    container.appendChild(span);

    return container;
}

export function loadContacts() {
    fetch('assets/data/contacts.json')
        .then((response) => response.json())
        .then((contacts) => {
            const contactListElement =
                document.querySelector('.contacts__list');

            // Vider l'ancien contenu (plus sûr que innerHTML = '')
            while (contactListElement.firstChild) {
                contactListElement.removeChild(contactListElement.firstChild);
            }

            contacts.forEach((contact) => {
                const contactElement = makeContactElement(contact);
                contactListElement.appendChild(contactElement);
            });
        });
}
