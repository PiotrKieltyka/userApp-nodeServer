// import * as passwordValidator from 'password-validator';
// tslint:disable-next-line:no-var-requires
const passwordValidator = require('password-validator');
const schema = new passwordValidator();

schema
    .is().min(10)                                   // Minimum length 10
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

export function validatePassword(password: string) {
    return schema.validate(password, { list: true });
}
