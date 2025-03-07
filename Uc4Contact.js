class Contact {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    // Method to add a new contact
    addContact(name, phone, email, address) {
        let contact = { name, phone, email, address };
        this.contacts.push(contact);
        console.log(`Contact added: ${name}`);
    }

    // Method to find and edit a contact by name
    editContact(name, newPhone, newEmail, newAddress) {
        let contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

        if (contact) {
            contact.phone = newPhone || contact.phone;
            contact.email = newEmail || contact.email;
            contact.address = newAddress || contact.address;
            console.log(`Contact updated: ${name}`);
        } else {
            console.log(`Contact not found: ${name}`);
        }
    }

    // Method to display all contacts
    displayContacts() {
        console.log("\nAddress Book:");
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            this.contacts.forEach((contact, index) => {
                console.log(
                    `${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}, Address: ${contact.address}`
                );
            });
        }
    }
}

// Create an Address Book instance
let myAddressBook = new Contact();

// Adding contacts
myAddressBook.addContact("John Doe", "123-456-7890", "john@example.com", "123 Street, NY");
myAddressBook.addContact("Jane Smith", "987-654-3210", "jane@example.com", "456 Avenue, LA");

// Display contacts before editing
myAddressBook.displayContacts();

// Editing an existing contact
myAddressBook.editContact("John Doe", "111-222-3333", "john.doe@newmail.com", "789 Road, SF");

// Display contacts after editing
myAddressBook.displayContacts();
