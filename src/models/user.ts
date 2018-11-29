import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    firstName: String,
    lastName: String,
    password: String,
    repeatPassword: String,
});

export const User = mongoose.model('User', userSchema);
