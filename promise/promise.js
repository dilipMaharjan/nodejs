var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //it can either reject or resolve

        // if (resolve) {
        //     resolve("Hey, I am resolved.");
        // } else {
            reject("Hey, I am rejected.");
        // }
    }, 2500);

});

promise.then((message) => {
    console.log('Sucess:', message);
}, (error) => {
    console.log("Failed:", error)
});