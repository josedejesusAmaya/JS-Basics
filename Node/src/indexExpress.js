const express = require('express');
const { phone } = require('phone');
const { addition } = require('./operations');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
app.use(urlencodedParser);
app.use(jsonParser);

const rootRoute = (req, res) => {
    res.status(200).send(`<html><body><h1>First Server ${addition(2, 3)} </h1></body></html>`);
}

const phoneRoute = (req, res) => {
    try {
        const query = req.query;
        const result = phone(query.value, query.country.toUpperCase());
        // res.setHeader("Content-Type", "application/json");
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(e.message);
    }
}

const loginRoute = (req, res) => {
    console.log(req.body);
    res.send( {status: "Ok"} );
}

const errorRoute = (req, res) => {
    res.status(404).send('No found');
} 

app.get('/', rootRoute);
app.get('/phone', phoneRoute);
app.post('/login', loginRoute);
app.use(errorRoute); // midleware
// app.get('*', errorRoute); // this should be at the end

app.listen(8080, () => {
    console.log('Listen on 8080' );
});

