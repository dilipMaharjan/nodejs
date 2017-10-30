const file = require('fs');

//write json data to file
const json = {
    "title": "Hey",
    "content": "Hey,there!"
};
let jsonString = JSON.stringify(json);
file.writeFileSync("post.json", jsonString);

// read json data from a file
let jsonObject = file.readFileSync("post.json");
let post = JSON.parse(jsonObject);
console.log(post.content);