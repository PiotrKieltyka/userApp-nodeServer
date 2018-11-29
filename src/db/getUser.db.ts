import { User } from '../models/user';

export async function getUserByEmail(email: string) {
    return await User.findOne({ email });
}

export async function getUser(key: any) {
    return await User.findOne({ [key.prop]: key.value});
}