import { Application } from 'express';
import { handleCreateUserRoute } from '../routes/authentication/create-user.route';
import { handleLoginRoute } from './authentication/login.route';
import { handleGetAllUsersRoute } from './user/getAllUsers';
import { handleCheckUserRoute } from './user/getUser';

export function handleRoutes(app: Application) {

    app.route('/').get( (req, res) => {
        res.send('hello stranger');
    });
    app.route('/api/signin').post(handleLoginRoute);
    app.route('/api/singout').post();
    app.route('/api/signup').post(handleCreateUserRoute);
    app.route('/api/user').get(handleCheckUserRoute);
    app.route('/api/users').get(handleGetAllUsersRoute);
}
