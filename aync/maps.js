
let yargs = require('yargs');
let geocode = require('./geocode/geocode')

let yargv = yargs.option(
    {
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    }
).help().alias('Help', 'h').argv;

geocode.geocode(yargv.address, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
})

