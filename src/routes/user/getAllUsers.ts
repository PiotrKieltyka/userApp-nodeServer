import { Request, Response } from 'express';
import { getAllUsers } from '../../db/getAllUsers.db';

export async function handleGetAllUsersRoute(req: Request, res: Response) {
    try {
        console.log('getting all users', req.body);
        res.status(200).json({ users: await getAllUsers() });
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
