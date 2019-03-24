import { Observable } from 'tns-core-modules/data/observable';
import { XORCipher } from '~/utils/encrypt';

let that;

export class HelloWorldModel extends Observable {
    password;
    passwordClass = 'pass-error';
    imageName = 'someimage.png';
    anotherImage = 'profile-pic';
    imageType = 'png';
    testDate = new Date();

    encryptPassword = {
        toView(value) {
            if (!value) return '';

            return XORCipher.decode('SECRET_KEY', value);
        },
        toModel(value) {
            if (!value) return '';

            return XORCipher.encode('SECRET_KEY', value);
        }
    };

    passwordSecurityCheck(encryptedPassword) {
        if (!encryptedPassword) return '';

        const password = XORCipher.decode('SECRET_KEY', encryptedPassword);

        const weakPasswords = [
            '123456',
            'password',
            '123456789',
            '12345678',
            '12345',
            '111111',
            '1234567',
            'sunshine',
            'qwerty',
            'iloveyou'
        ];

        let score = 0;
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[!@#$%^&*()]/.test(password)) score++;
        score = password.length >= 6 ? score + 1 : 0;

        if (weakPasswords.includes(password)) score = 1;

        switch (score) {
            case 0:
                that.set('passwordClass', 'pass-error'); return 'Minimum 6 characters';
            case 1: 
                that.set('passwordClass', 'pass-error'); return 'Very Weak';
            case 2:
                that.set('passwordClass', 'pass-medium'); return 'Weak';
            case 3:
                that.set('passwordClass', 'pass-medium'); return 'Medium';
            case 4:
                that.set('passwordClass', 'pass-strong'); return 'Strong';
            case 5:
                that.set('passwordClass', 'pass-secure'); return 'Very Strong';
            case 6:
                that.set('passwordClass', 'pass-secure'); return 'You are the Boss';
        }
    };

    constructor() {
        super();

        that = this;
    }
}
