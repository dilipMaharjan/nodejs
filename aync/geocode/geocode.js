var request = require('request');

var geocode = (address, callback) => {
    let encodedAddress = encodeURIComponent(address)
    request(
        {
            url: `https://maps.googleapis.com/maps/api/geocode/json?key= AIzaSyCAIrBKw-Ymagd8M-sPeGRJ8lEuocduDyY&address=${encodedAddress}`,
            json: true
        },
        (error, response, body) => {
            if (error) {
                callback("Failed to connected to google server.");
            } else if (body.status === 'ZERO_RESULTS') {
                callback("Address not found.");
            } else if (body.status === 'OK') {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
}

module.exports.geocode = geocode