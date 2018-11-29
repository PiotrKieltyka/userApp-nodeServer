import * as argon2 from 'argon2';
import { Request, Response } from 'express';
import { getUserByEmail } from '../../db/getUser.db';
import { IUser } from '../../interfaces/user';

export async function handleLoginRoute(req: Request, res: Response) {

    const credentials = req.body;

    const user = await getUserByEmail(credentials.email) as IUser;

    if (user) {
        try {
            await attemptLogin(credentials, user);
            res.status(200).send({ id : user._id });
        } catch (err) {
            res.status(403).send();
        }
    } else {
        res.status(404).send();
    }
}

async function attemptLogin(credentials: any, user: IUser): Promise<void> {
    const passwordValid = await argon2.verify(user.password, credentials.password);

    if (!passwordValid) {
        throw new Error('Invalid password');
    }
}
