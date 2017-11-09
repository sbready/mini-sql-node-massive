const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');

const app = express();
massive( process.env.CONNECTION_STRING ).then(dbInstance => {
    app.set('db', dbInstance);
    dbInsance.new_planes().then(planes => return console.log(planes)).catch(err => return console.log(err);)
})

app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/planes', controller.getPlanes);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

