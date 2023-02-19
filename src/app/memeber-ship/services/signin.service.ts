import { Injectable } from '@angular/core';
import { AuthError, AuthErrorCodes, AuthProvider, User } from 'firebase/auth';
import { AuthService } from 'shared/service/auth.service';
import { UsersService } from 'shared/service/users.service';
import { AuthErrors } from '../models/AuthErrors';


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  Error?: AuthErrors

  constructor(private authService: AuthService, private db: UsersService) { }

  signinWithFacebook = () => { this.signinWithPopup(this.authService.facebookProvider) }

  signinWithGoogle = () => { this.signinWithPopup(this.authService.googleProvider) }

  private signinWithPopup(provider: AuthProvider) {
    this.authService.AuthWithPopup(provider,
      user => this.popupSuccess(user),
      error => new AuthErrors(<AuthError>error)
    )
  }

  private popupSuccess(user: User) {
    this.db.checkEmailExist(user.uid,
      () => { this.authService.logout(); this.Error = new AuthErrors(AuthErrorCodes.USER_DELETED) },
      () => this.authService.navigation()
    )
  }

  signinWithEmail(form: any) {
    this.authService.signInWithEmail(form.email, form.password)
      .then(() => this.authService.navigation())
      .catch(error => this.Error = new AuthErrors(error))
  }

}
