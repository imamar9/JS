const mysym = Symbol("Key1")

user = {
    email : "abc@gmail.com",
    name : "Amar",
    age : 18,
    role : 'SDE',
    "title" : "Mr.",
    [mysym] : "mykey"  // [] is used to use it as symbol, not string
 }

console.log(user.email)
console.log(user['name']);
console.log(user.title);
console.log(user[mysym]);