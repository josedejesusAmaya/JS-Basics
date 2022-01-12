const express = require('express');
const bodyParser = require('body-parser');
// const v1 = require('./routes/v1/index'); is the same than
const apiV1 = require('./routes/v1');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
app.use(urlencodedParser);
app.use(jsonParser);

apiV1(app);

const errorRoute = (req, res) => {
    res.status(404).send('No found');
}

app.use(errorRoute); // midleware

app.listen(8080, () => {
    console.log('Listen on 8080' );
});
