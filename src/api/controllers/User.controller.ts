import { Request, Response } from 'express';
import UserModel from '../models/User';

export const getAllUsers = async (request: Request, response: Response) => {
    try {
        const users = await UserModel.find();
        response.statusCode = 200;
        response.send({
            users: users,
        });
    } catch (error) {
        response.statusCode = 404;
        response.send({
            error: error,
        });
    }
};

export const getOneUser = async (request: Request, response: Response) => {
    try {
        const user = await UserModel.findById(request.params.id);
        response.statusCode = 200;
        response.send({
            user: user,
        });
    } catch (error) {
        response.statusCode = 404;
        response.send({
            error: error,
        });
    }
};

export const createUsers = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.create(req.body);
        res.statusCode = 200;
        res.send(user);
    } catch (error) {
        res.statusCode = 404;
        res.send({
            error: error,
        });
    }
};

export const deleteUsers = async (request: Request, response: Response) => {
    try {
        const user = await UserModel.findByIdAndDelete(request.params.id);
        response.statusCode = 200;
        response.send({
            user,
        });
    } catch (error) {
        response.statusCode = 404;
        response.send({
            error: error,
        });
    }
}