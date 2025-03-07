function sortAndProcessAddressBook(addressBook, key) {
    // Filter valid entries (ensure key exists)
    let validEntries = addressBook.filter(contact => contact[key]);

    // Sort entries based on the key
    let sortedEntries = validEntries.sort((a, b) => a[key].localeCompare(b[key]));

    // Map to extract only necessary details
    let mappedEntries = sortedEntries.map(contact => ({
        name: `${contact.firstName} ${contact.lastName}`,
        city: contact.city,
        state: contact.state,
        zip: contact.zip
    }));

    // Reduce to count unique cities
    let cityCount = mappedEntries.reduce((acc, contact) => {
        acc[contact.city] = (acc[contact.city] || 0) + 1;
        return acc;
    }, {});

    return { sortedEntries: mappedEntries, cityCount };
}

// Example Address Book Data
let addressBook = [
    { firstName: "John", lastName: "Doe", city: "New York", state: "NY", zip: "10001" },
    { firstName: "Jane", lastName: "Smith", city: "Los Angeles", state: "CA", zip: "90001" },
    { firstName: "Alice", lastName: "Johnson", city: "Chicago", state: "IL", zip: "60601" },
    { firstName: "Bob", lastName: "Brown", city: "New York", state: "NY", zip: "10002" }
];

// Sort by City
console.log(sortAndProcessAddressBook(addressBook, "city"));
