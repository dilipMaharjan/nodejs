console.log('Starting app....');

setTimeout(()=>{
    console.log("Inside setTimeout");
},2000);

setTimeout(()=>{
    console.log("Should have been printed earlier");
},0);

console.log("App stopped...")
