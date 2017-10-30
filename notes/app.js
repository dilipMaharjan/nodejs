console.log("Starting App...");

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
let user = os.userInfo();

console.log(user);

fs.appendFile("greeting.txt", `Hello ${user.username}! Your age is ${notes.age}\n`, err => {
    if (err) {
        console.log("Ubable to write data.");
    }
});
