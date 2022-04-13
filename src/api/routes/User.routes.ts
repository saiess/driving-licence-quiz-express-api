import express from 'express';
import {getAllUsers, getOneUser, createUsers, deleteUsers} from '../controllers/User.controller';

const UserRoutes = express.Router();


UserRoutes.get('/all', getAllUsers);
UserRoutes.post('/create', createUsers);
UserRoutes.delete('/delete/:id', deleteUsers);
UserRoutes.get('/one/:id', getOneUser);


export default UserRoutes;