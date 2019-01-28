const express = require('express');
const hbs = require('express-hbs');
const fs = require('fs');

const inlineChanges = require('./inlineSyntax.js');

const port = process.env.PORT || 3000;
let app = express();

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Just an ampty page',
        welcomeMessage: 'Test message'
    });
});

app.get('/axios', (req, res) => {
    res.send({
        function: inlineChanges().inlineFinal,
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});