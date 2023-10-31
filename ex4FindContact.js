const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'

console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined

const johnContactInfo = findContact(contactsWithJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"

function addContact(objectName, InputName, InputPhoneNumber) {
    return {
        John : {
            name: InputName,
            phoneNumber: InputPhoneNumber,
        }
    }
}

function findContact(contactsWithJohn, searchInput) {
    return ('"Name: ' + contactsWithJohn.John.name + ', Phone: ' + contactsWithJohn.John.phoneNumber + '"')
} // nie wiem jak zrobic zeby searchInput czytalo jako lokalizacje obiektu "John"