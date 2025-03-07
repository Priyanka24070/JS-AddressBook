class AddressBook {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    // Method to add a new contact
    addContact(name, phone, email, address, city, state, zip) {
        let contact = { name, phone, email, address, city, state, zip };
        this.contacts.push(contact);
        console.log(`Contact added: ${name}`);
    }

    // Generic sort method based on a key (city, state, or zip)
    sortByKey(key) {
        let sortedContacts = this.contacts.slice().sort((a, b) => a[key].localeCompare(b[key]));

        console.log(`\nContacts Sorted by ${key.charAt(0).toUpperCase() + key.slice(1)}:`);
        sortedContacts.map(contact => 
            console.log(`${contact.name}, ${contact.phone}, ${contact.email}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`)
        );
    }

    // Method to display all contacts
    displayContacts() {
        console.log("\nAddress Book:");
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            this.contacts.map(contact => 
                console.log(`${contact.name}, ${contact.phone}, ${contact.email}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`)
            );
        }
    }
}

// Create an Address Book instance
let myAddressBook = new AddressBook();

// Adding contacts
myAddressBook.addContact("John Doe", "123-456-7890", "john@example.com", "123 Street", "New York", "NY", "10001");
myAddressBook.addContact("Jane Smith", "987-654-3210", "jane@example.com", "456 Avenue", "Los Angeles", "CA", "90001");
myAddressBook.addContact("Mike Johnson", "555-123-4567", "mike@example.com", "789 Road", "Chicago", "IL", "60007");
myAddressBook.addContact("Sarah Lee", "333-222-1111", "sarah@example.com", "321 Blvd", "New York", "NY", "10005");
myAddressBook.addContact("Tom Brown", "999-888-7777", "tom@example.com", "654 Lane", "Los Angeles", "CA", "90005");

// Display all contacts before sorting
myAddressBook.displayContacts();

// Sort contacts by City
myAddressBook.sortByKey("city");

// Sort contacts by State
myAddressBook.sortByKey("state");

// Sort contacts by Zip
myAddressBook.sortByKey("zip");
