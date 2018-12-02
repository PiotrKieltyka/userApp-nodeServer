import { IUser } from '../interfaces/user';
import { User } from '../models/user';
import { ObjectID } from 'bson';

export async function createUser(user: IUser) {

    return new User({
        _id: new ObjectID(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
    }).save();
}
