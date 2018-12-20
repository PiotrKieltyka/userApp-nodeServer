import { Application } from 'express';
import { handleCreateUserRoute } from '../routes/authentication/create-user.route';
import { handleLoginRoute } from './authentication/login.route';
import { handleLogoutRoute } from './authentication/logout.route';
import { handleGetAllUsersRoute } from './user/getAllUsers';
import { handleGetUserRoute } from './user/getUser';

export function handleRoutes(app: Application) {

    app.route('/').get( (req, res) => {
        res.status(403).send('hello stranger, r u lost?');
    });
    app.route('/api').get( (req, res) => {
        // console.log(req.headers.host);
        res.status(403).send('hello stranger, what r u looking for?');
    });
    app.route('/api/signin').post(handleLoginRoute);
    app.route('/api/signout').post(handleLogoutRoute);
    app.route('/api/signup').post(handleCreateUserRoute);
    app.route('/api/user').post(handleGetUserRoute);
    app.route('/api/user/:id').get(handleGetUserRoute);
    app.route('/api/users').get(handleGetAllUsersRoute);
}
