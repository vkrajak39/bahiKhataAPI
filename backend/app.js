const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt')
const path = require('path');

const {apiRouter} = require('./routes/apiRouter');

const cors = require('cors');




const app = express();



/*********************** middleware ****************/ 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





/************* Routes **************/

app.use('/api',apiRouter);





/**  running server */

const port =3000;
const db = require('./models');

db.sequelize.sync().then((req)=>{
    
    app.listen(port, () => {
        console.log(`Server started on port`);
    });

});