const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple type
} = {
    name: 'Natali',
    age: 34,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}