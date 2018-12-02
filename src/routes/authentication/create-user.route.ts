import * as argon2 from 'argon2';
import { Request, Response } from 'express';
import { createUser } from '../../db/create-user.db';
import { IUser } from '../../interfaces/user';
import { validatePassword } from '../../interfaces/validate-password';

export async function handleCreateUserRoute(req: Request, res: Response) {
    const credentials = req.body;
    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const user = await hashPasswordAndCreateUser(credentials) as IUser;
        res.status(200).send({ _id: user._id });
    } catch (error) {
        res.status(500).send();
    }
}

async function hashPasswordAndCreateUser(credentials: any) {
    credentials.email = credentials.email.toLowerCase();
    credentials.password = await argon2.hash(credentials.password);
    return await createUser(credentials);
}
