const person = {fullName: 'jack william', age: 17, job: 'facebooker', gfName: 'Ema watson', phone: 01711000000, address: 'kochu khet' };


const { phone, gfName, address, salary } = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);

const friends = ['mina', 'tuliu', 'mithu', 'ruby'];
const [chotoFriend, ...restFriends ] = friends;
console.log(restFriends)