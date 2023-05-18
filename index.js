import express from 'express';
import bodyParser from 'body-parser';
import connection from './database/database.js';
import expressEjsLayouts from 'express-ejs-layouts';
import router from './routes/index.js';

const PORT = 3000;
const app = express();

// View engine
app.use(expressEjsLayouts);
app.set('layout', './layouts/app');
app.set('view engine', 'ejs');

// Static assets
app.use(express.static('public'));

// Body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using routes 
app.use(router);

connection.authenticate()
    .then(() => {
        console.log('Connection to database established');
    })
    .catch(err => {
        console.error(err);
    });

app.listen(PORT, function(){
    console.log(`listening on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});