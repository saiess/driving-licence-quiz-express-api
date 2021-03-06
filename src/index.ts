import express from 'express';
import './database';
import QuestionRoutes from './api/routes/Permi.routes';
import UserRoutes from "./api/routes/User.routes";
import bodyParser from 'body-parser';
import cors from 'cors';

require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(cors());


// ** routes //
app.use('/question', QuestionRoutes);
app.use('/user', UserRoutes);


app.listen(process.env.PORT, () => {
    console.log('server is running on port', process.env.PORT);
});