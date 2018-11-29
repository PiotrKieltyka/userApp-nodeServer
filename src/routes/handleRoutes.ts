import { Application } from 'express';
import { handleCheckUserRoute } from './user/getUser';
import { handleGetAllUsersRoute } from './user/getAllUsers';

export function handleRoutes(app: Application) {

    app.route('/').get( (req, res) => {
        res.send('hello stranger');
    });
    app.route('/api/signup').post();
    app.route('/api/signin').post();
    app.route('/api/user').get(handleCheckUserRoute);
    app.route('/api/users').get(handleGetAllUsersRoute);
}
