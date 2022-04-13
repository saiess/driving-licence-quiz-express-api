import express from 'express';
import {createQuestions, deleteQuestions, getAllQuestions, getOneQuestions} from '../controllers/Permi.Controller';

const QuestionRoutes = express.Router();


QuestionRoutes.get('/all', getAllQuestions);
QuestionRoutes.post('/create', createQuestions);
QuestionRoutes.delete('/delete/:id', deleteQuestions);
QuestionRoutes.get('/one/:id', getOneQuestions);


export default QuestionRoutes;