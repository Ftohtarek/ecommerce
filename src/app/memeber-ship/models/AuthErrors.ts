import { AuthError, AuthErrorCodes } from "firebase/auth";

export class AuthErrors {
    private errorCode: any
    constructor(private error: AuthError | string) {
        if (typeof (error) == 'string') this.errorCode = error
        if (typeof (error) == 'object') this.errorCode = error.code
        console.log(this.errorCode);
    }
    
    get emailIsExist() {
        return this.errorCode == AuthErrorCodes.EMAIL_EXISTS ? true : false
    }
    get userNotExist() {
        return this.errorCode == AuthErrorCodes.USER_DELETED ? true : false
    }
    get wrongPassword() {
        return this.errorCode == AuthErrorCodes.INVALID_PASSWORD ? true : false
    }
    get invalidEmail() {
        return this.errorCode == AuthErrorCodes.INVALID_EMAIL ? true : false
    }
    get internalError() {
        return this.errorCode == AuthErrorCodes.INTERNAL_ERROR ? true : false
    }
    get weakPassword() {
        return this.errorCode == AuthErrorCodes.WEAK_PASSWORD ? true : false
    }
    get PopupClosed() {
        return this.errorCode == AuthErrorCodes.POPUP_CLOSED_BY_USER ? true : false
    }
}