import express from 'express';
import {createQuestions, deleteQuestions, getAllQuestions, getOneQuestions} from '../controllers/Permi.Controller';

const router = express.Router();


router.get('/all', getAllQuestions);
router.post('/create', createQuestions);
router.delete('/delete/:id', deleteQuestions);
router.get('/one/:id', getOneQuestions);


export default router;