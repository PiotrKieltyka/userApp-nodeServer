import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    confirmPassword: String,
    email: { type: String, unique: true },
    firstName: String,
    lastName: String,
    password: String,
});

export const User = mongoose.model('User', userSchema);
