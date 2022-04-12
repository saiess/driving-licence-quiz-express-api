import { Request, Response } from 'express';
import PermiModel from '../models/Permi';
import mongoose from '../../database';

// const getAllQuestions = async (request: Request, response: Response) => {
//   const questions = [
//     {
//       Q: 'Ehhe te nandayo?',
//       answer: 'ehee',
//     },
//     {
//       Q: 'Omaywa mou chindieru?',
//       answer: 'nanniiiiiiiii',
//     },
//   ];

//   response.statusCode = 200;
//   response.send({
//     questions: questions,
//   });
// };

// export default getAllQuestions;

export const getAllQuestions = async (request: Request, response: Response) => {
  try {
    const questions = await PermiModel.find();
    response.statusCode = 200;
    response.send({
      questions: questions,
    });
  } catch (error) {
    response.statusCode = 404;
    response.send({
      error: error,
    });
  }
};

export const getOneQuestions = async (request: Request, response: Response) => {
  try {
    const question = await PermiModel.findById(request.params.id);
    console.log(question);
    response.statusCode = 200;
    response.send({
      question: question,
    });
  } catch (error) {
    response.statusCode = 404;
    response.send({
      error: error,
    });
  }
};

export const createQuestions = async (req: Request, res: Response) => {
  try {
    // const question = new PermiModel(req.body);
    // await question.save();
    const question = await PermiModel.create(req.body);
    res.statusCode = 200;
    res.send({
      question: question,
    });
  } catch (error) {
    res.statusCode = 404;
    res.send({
      error: error,
    });
  }
};

export const deleteQuestions = async (request: Request, response: Response) => {
  try {
    const question = await PermiModel.findByIdAndDelete(request.params.id);
    response.statusCode = 200;
    response.send({
      question,
    });
  } catch (error) {
    response.statusCode = 404;
    response.send({
      error: error,
    });
  }
}