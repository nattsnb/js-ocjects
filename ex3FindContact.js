const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'

console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined
console.log(contacts); // undefined
console.log(contactsWithJohn); // undefined

function addContact(objectName, InputName, InputPhoneNumber) {
    return {
        John : {
            name: InputName,
            phoneNumber: InputPhoneNumber,
        }
    }
}