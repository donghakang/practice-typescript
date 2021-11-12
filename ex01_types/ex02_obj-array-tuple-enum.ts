// const person: object = {
//     name: 'Dongha',
//     age: 30
// }

// enum
enum Status {
    ADMIN, READ_ONLY, AUTHOR
};

// object has two attributes, name, age, hobbies which type specified
// hobbies -> array,
// role: -> tuple
const person: { name: string; age: number, hobbies: string[], role: [number, string], status: Status} = {
  name: "Dongha",
  age: 30,
  hobbies: ['Running', 'Programming'],
  role: [2, 'author'],
  status: Status.ADMIN
};

console.log(person.name);
console.log(person.status)
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}