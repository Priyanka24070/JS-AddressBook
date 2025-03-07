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

    // Method to get the total number of contacts using reduce()
    getContactCount() {
        let count = this.contacts.reduce((total) => total + 1, 0);
        console.log(`Total Contacts: ${count}`);
        return count;
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

// Display contacts
myAddressBook.displayContacts();

// Get the total number of contacts
myAddressBook.getContactCount();
