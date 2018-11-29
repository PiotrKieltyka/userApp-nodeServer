import { User } from '../models/user';

export async function getAllUsers() {
    return await User.find();
}
