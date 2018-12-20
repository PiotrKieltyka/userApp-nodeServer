import { Request, Response } from 'express';

export function handleLogoutRoute(req: Request, res: Response) {
    console.log('user is logged out');
    res.status(200).send();
}
