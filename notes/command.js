const yargs = require('yargs');

const argv = yargs.argv;

let command = process.argv[2]

console.log(command);

console.log(argv);

switch (command) {
    case "add":
        console.log(argv.title, argv.note);
        break;
    case "remove":
        console.log("REMOVE");
    default:
        console.log("Undefined command.")
        break;
}
