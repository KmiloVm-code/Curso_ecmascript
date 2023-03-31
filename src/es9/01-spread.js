const user = { username: 'kmilo',  age: 27, country: 'CO'};
const { username, ...values } = user;
console.log(username);
console.log(values);