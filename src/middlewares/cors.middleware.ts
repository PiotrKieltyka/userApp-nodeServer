import { NextFunction, Request, Response } from 'express';
import { stringify } from 'querystring';

export function allowCORS(req: Request, res: Response, next: NextFunction) {
    const origin = req.headers.origin;
    const allowedOrigins = [
        `http://localhost:4200`,
        `http://localhost:8080`,
        `http://localhost:3010`,
        `https://localhost:4200`,
    ];

    // if (allowedOrigins.indexOf(origin) > -1 ) {
    //     res.setHeader('Access-Control-Allow-Origin', origin);
    // }
    res.header('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Credentials', 'true');
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
}
