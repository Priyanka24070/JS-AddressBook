class Contact {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    // Method to add a new contact
    addContact(name, phone, email, address, city, state) {
        let contact = { name, phone, email, address, city, state };
        this.contacts.push(contact);
        console.log(`Contact added: ${name}`);
    }

    // Method to search for contacts by city
    searchByCity(city) {
        let results = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());

        console.log(`\nContacts in ${city}:`);
        results.length > 0
            ? results.map(contact => console.log(`${contact.name}, ${contact.phone}, ${contact.email}, ${contact.address}`))
            : console.log("No contacts found in this city.");
    }

    // Method to search for contacts by state
    searchByState(state) {
        let results = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());

        console.log(`\nContacts in ${state}:`);
        results.length > 0
            ? results.map(contact => console.log(`${contact.name}, ${contact.phone}, ${contact.email}, ${contact.address}`))
            : console.log("No contacts found in this state.");
    }

    // Method to display all contacts
    displayContacts() {
        console.log("\nAddress Book:");
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            this.contacts.map((contact, index) => {
                console.log(
                    `${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}, Address: ${contact.address}, City: ${contact.city}, State: ${contact.state}`
                );
            });
        }
    }
}

// Create an Address Book instance
let myAddressBook = new Contact();

// Adding contacts
myAddressBook.addContact("John Doe", "123-456-7890", "john@example.com", "123 Street", "New York", "NY");
myAddressBook.addContact("Jane Smith", "987-654-3210", "jane@example.com", "456 Avenue", "Los Angeles", "CA");
myAddressBook.addContact("Mike Johnson", "555-123-4567", "mike@example.com", "789 Road", "New York", "NY");

// Display all contacts
myAddressBook.displayContacts();

// Search by city
myAddressBook.searchByCity("New York");

// Search by state
myAddressBook.searchByState("CA");
