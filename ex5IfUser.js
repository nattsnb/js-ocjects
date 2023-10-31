const user = {
    firstName: 'Bob',
    lastName: 'Ross',
    age: 40,
    greet() {
        return "Hi, I'm Bob Ross!";
    }
}
const objectExample = {
    firstName: 'Kate',
    lastName: 'Williams',
    age: 40,
    greet() {
        return "Hi, I'm Kate!";
    }
}
const car = {
    make: 'Ferrari',
    model: 'F40',
    greet() {
        return "<engine noise>";
    }
}

console.log(validateIfObjectIsAUser(user)); // true
console.log(validateIfObjectIsAUser(objectExample)); // false
console.log(validateIfObjectIsAUser(car)); // false

function validateIfObjectIsAUser(inputObjectName) {

    return typeof inputObjectName.firstName === "string"
        && typeof inputObjectName.lastName === "string"
        && typeof inputObjectName.age === "number"
        && typeof inputObjectName.greet === "function"
        && String(inputObjectName.greet).includes(inputObjectName.firstName)
        && String(inputObjectName.greet).includes(inputObjectName.lastName)
}