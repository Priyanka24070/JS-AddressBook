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

    // Method to find and delete a contact by name
    deleteContact(name) {
        let index = this.contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());

        if (index !== -1) {
            let removedContact = this.contacts.splice(index, 1);
            console.log(`Contact deleted: ${removedContact[0].name}`);
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

// Display contacts before deleting
myAddressBook.displayContacts();

// Deleting a contact
myAddressBook.deleteContact("John Doe");

// Display contacts after deleting
myAddressBook.displayContacts();
