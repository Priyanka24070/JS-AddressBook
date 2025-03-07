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

    // Method to count contacts by City using reduce()
    countByCity() {
        let cityCount = this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});

        console.log("\nContact Count by City:");
        Object.keys(cityCount).map(city => console.log(`City: ${city}, Count: ${cityCount[city]}`));
    }

    // Method to count contacts by State using reduce()
    countByState() {
        let stateCount = this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});

        console.log("\nContact Count by State:");
        Object.keys(stateCount).map(state => console.log(`State: ${state}, Count: ${stateCount[state]}`));
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
myAddressBook.addContact("Sarah Lee", "333-222-1111", "sarah@example.com", "321 Blvd", "Los Angeles", "CA");
myAddressBook.addContact("Tom Brown", "999-888-7777", "tom@example.com", "654 Lane", "Chicago", "IL");

// Display all contacts
myAddressBook.displayContacts();

// Count contacts by City
myAddressBook.countByCity();

// Count contacts by State
myAddressBook.countByState();
