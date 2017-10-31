var request = require('request');
var yargs = require('yargs');

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

let encodedAddress = encodeURIComponent(yargv.address)

request(
    {
        url: `https://maps.googleapis.com/maps/api/geocode/json?key= AIzaSyCAIrBKw-Ymagd8M-sPeGRJ8lEuocduDyY&address=${encodedAddress}`,
        json: true
    },
    (error, response, body) => {
        console.log(JSON.stringify(`Address: ${body.results[0].formatted_address}`));
        console.log(JSON.stringify(`Latitude: ${body.results[0].geometry.location.lat}`));
        console.log(JSON.stringify(`Longitude: ${body.results[0].geometry.location.lng}`));
    });