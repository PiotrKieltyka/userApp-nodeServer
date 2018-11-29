import { IUser } from '../interfaces/user';
import { User } from '../models/user';

export async function createUser(user: IUser) {

    console.log(user);

    return new User({
        confirmPassword: user.confirmPassword,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
    }).save();
}
