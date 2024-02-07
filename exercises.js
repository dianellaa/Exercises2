/*
function filterRange(arr, a, b) {
    // Use the filter method to create a new array containing elements within the range [a, b]
    return arr.filter(element => element >= a && element <= b);
}

// Example usage:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);  // Output: [3, 1]
console.log(arr);       // Output: [5, 3, 8, 1] (original array remains unmodified)
*/

/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 }; 
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

console.log(names); // Output: ["John", "Pete", "Mary"]
*/

function getAverageAge(users) {
    // Check if the users array is empty
    if (users.length === 0) {
        return 0;
    }

    // Calculate the sum of ages
    const sumOfAges = users.reduce((total, user) => total + user.age, 0);

    // Calculate the average age
    const averageAge = sumOfAges / users.length;

    return averageAge;
}

// Example usage:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // Output: 28

