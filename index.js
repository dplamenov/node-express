const express = require('express');
const hbs = require('express-handlebars');

const router = require('./router');


const app = express();
app.set('view engine', '.hbs');
app.engine('.hbs', hbs({ extname: '.hbs' }));

app.use(express.urlencoded({ extended: false }));
app.use(router);


app.listen(3001);