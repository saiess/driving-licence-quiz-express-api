import express from 'express';
import './database';
import router from './api/routes/Permi.routes';
import bodyParser from 'body-parser';

require('dotenv').config();

const app = express();
app.use(bodyParser.json());


// ** routes //
app.use('/question', router);


app.listen(process.env.PORT, () => {
    console.log('server is running on port', process.env.PORT);
});