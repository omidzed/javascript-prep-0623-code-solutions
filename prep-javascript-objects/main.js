const person = { firstName: 'Omid', lastName: 'Asadi', hobby: 'Soccer' };

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is:" + ' ' + fullName + '.');

person.job = 'engineer';
console.log("The person's current job is: " + person.job);

person['previousJob'] = 'teacher';
console.log("The person's previous job was: " + person['previousJob']);

console.log(person);
