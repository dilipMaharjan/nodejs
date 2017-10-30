var getUser = (id, callback) => {
    var user = {
        id: 29,
        name: 'dilip'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
}

getUser(29, (user) => {
    console.log(user);
})