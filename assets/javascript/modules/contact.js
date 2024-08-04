function makeContactElement(contact) {
    const contactElement = `
    <div class="contact">
        <a href="${contact.url}" target="_blank">
            <img
                src="${contact.image}"
                alt="${contact.name} image"
            />
        </a>
        <span>${contact.name}</span>
    </div>
    `;

    return contactElement;
}

export function loadContacts() {
    fetch('assets/data/contacts.json')
        .then((response) => response.json())
        .then((contacts) => {
            const contactListElement = document.querySelector(
                '#contacts .container .list'
            );

            const contactElements = contacts.map((contact) =>
                makeContactElement(contact)
            );

            contactListElement.innerHTML = contactElements.join('');
        });
}
