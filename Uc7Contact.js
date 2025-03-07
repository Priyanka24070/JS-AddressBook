class Contact {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    // Method to check if a contact already exists
    isDuplicate(name) {
        return this.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    }

    // Method to add a new contact (only if not duplicate)
    addContact(name, phone, email, address) {
        if (this.isDuplicate(name)) {
            console.log(`Duplicate Entry! Contact '${name}' already exists.`);
            return;
        }

        let contact = { name, phone, email, address };
        this.contacts.push(contact);
        console.log(`Contact added: ${name}`);
    }

    // Method to display all contacts
    displayContacts() {
        console.log("\nAddress Book:");
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            this.contacts.map((contact, index) => {
                console.log(
                    `${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}, Address: ${contact.address}`
                );
            });
        }
    }

    // Method to count the number of contacts using reduce()
    getContactCount() {
        let count = this.contacts.reduce(total => total + 1, 0);
        console.log(`Total Contacts: ${count}`);
        return count;
    }
}

// Create an Address Book instance
let myAddressBook = new Contact();

// Adding contacts (including a duplicate entry)
myAddressBook.addContact("John Doe", "123-456-7890", "john@example.com", "123 Street, NY");
myAddressBook.addContact("Jane Smith", "987-654-3210", "jane@example.com", "456 Avenue, LA");
myAddressBook.addContact("John Doe", "111-222-3333", "john.doe@newmail.com", "789 Road, SF"); // Duplicate

// Display contacts
myAddressBook.displayContacts();

// Get the total number of contacts
myAddressBook.getContactCount();
