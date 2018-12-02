import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: String,
    confirmPassword: String,
    email: { type: String, unique: true },
    firstName: String,
    lastName: String,
    password: String,
});

export const User = mongoose.model('User', userSchema);
