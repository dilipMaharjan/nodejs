let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) === 'number' && typeof (b) === 'number') {
                resolve(a + b);
            } else {
                reject("Both inputs should be a number");
            }
        }, 2500)
    })
}
add(3, "asd").then((res) => {
    console.log("Sum:" + res);
}, (error) => {
    console.log("Error:" + error)
});