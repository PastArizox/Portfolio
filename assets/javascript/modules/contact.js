function makeContactElement(contact) {
    const contactElement = `
    <div class="contact">
        <a
            class="contact__link"
            href="${contact.url}"
            target="_blank"
        >
            <img
                class="contact__logo"
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
            const contactListElement =
                document.querySelector('.contacts__list');

            const contactElements = contacts.map((contact) =>
                makeContactElement(contact)
            );

            contactListElement.innerHTML = contactElements.join('');
        });
}
