const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
let app = express();

//set partials

hbs.registerPartials(__dirname + '/views/partials');

//express settings

app.set('view engine', 'hbs'); //set view engine

//hbs helper

hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();
})

//middlewares

app.use(express.static(__dirname + '/public')); //server static page from public,__dirname gives the root of project

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now} : ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log',log +'\n', (err) => {
        if (err) { console.log(err); }
    });
    next();
});

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
    res.render('index.hbs', {
        pageTitle: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'about'
    });
});
app.listen(1234, () => {
    console.log("Server is ready on port:1234")
});
