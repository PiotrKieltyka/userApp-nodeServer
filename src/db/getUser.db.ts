import { User } from '../models/user';

export async function getUserById(id: string) {
    return await User.findOne( id );
}

export async function getUserByEmail(email: string) {
    return await User.findOne({ email });
}
