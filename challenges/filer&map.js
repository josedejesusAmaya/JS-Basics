const users = [
    { firstName: 'Pepe', lastName: 'Amaya', age: 26 },
    { firstName: 'Emi', lastName: 'Mtz', age: 11 },
    { firstName: 'Miguel', lastName: 'Hdz', age: 2 },
    { firstName: 'Valentina', lastName: 'Negrete', age: 3 },
];

// return names of people with age lest than 10 yo

const output = users.filter(people => people.age < 10).map(child => child.firstName);
// const output = users.reduce((acc, people) => {
//     if (people.age < 10) {
//         acc.push(people.firstName);
//     }
//     return acc;
// }, []);
console.log(output);