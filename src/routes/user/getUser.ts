import { Request, Response } from 'express';
import { getUserByEmail, getUserById } from '../../db/getUser.db';
import { IUser } from './../../interfaces/user';

export async function handleGetUserRoute(req: Request, res: Response) {

    if (!req) {
       console.log('bad request for getting user');
       return res.sendStatus(400);
    }

    if (req.params.id) {
        console.log('getting user by id', req.params.id);
        const id = JSON.parse(`{ "_id": "${req.params.id}" }`);

        const user = await getUserById(id) as IUser;

        if (user) {
            res.status(200).json({
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            });
        } else {
            res.status(204).send('user not found');
        }
    }

    if (req.body.email) {
        console.log('getting user by email', req.body.email);

        const user = await getUserByEmail(req.body.email) as IUser;

        if (user) {
            res.status(200).json({
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            });
        } else {
            res.status(204).send('user not found');
        }
    }
}
