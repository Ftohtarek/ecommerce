import { Injectable } from '@angular/core';

import { AuthError, AuthErrorCodes, AuthProvider, updateProfile, User } from 'firebase/auth';
import { ActiveUser } from 'shared/models/active-user';
import { AuthService } from 'shared/service/auth.service';
import { UsersService } from 'shared/service/users.service';

import { AuthErrors } from '../models/AuthErrors';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public Error?: AuthErrors;
  private defalutImgUrl = 'https://firebasestorage.googleapis.com/v0/b/angular15-ecommerce-app.appspot.com/o/index.png?alt=media&token=eeaac4ea-1170-44aa-be25-478202466ef0'


  constructor(private authService: AuthService, private db: UsersService) { }

  public registerWithFacebook = () => { this.registerWithPopup(this.authService.facebookProvider) }

  public registerWithGoogle = () => { this.registerWithPopup(this.authService.googleProvider) }

  public registerWithNativeEmail(form: any) {
    this.authService.signUpWithEmail(form.email, form.password)
      .then(user => this.succussRegister(<User>user.user, form))
      .catch(error => this.Error = new AuthErrors(<AuthError>error))
  }

  private registerWithPopup(provider: AuthProvider) {
    this.authService.AuthWithPopup(provider,
      user => this.popupSuccess(user),
      error => this.Error = new AuthErrors(<AuthError>error)
    )
  }

  private popupSuccess(user: User) {
    this.db.checkEmailExist(user.uid,
      () => this.succussRegister(user),
      () => { this.authService.logout(); this.Error = new AuthErrors(AuthErrorCodes.EMAIL_EXISTS) }
    )
  }

  /* Add user to database users and set default image then navigation  */
  private async succussRegister(user: User, form?: any) {
    let activeUser: ActiveUser;
    user.photoURL ? user.photoURL : await updateProfile(user, { photoURL: this.defalutImgUrl })

    activeUser = { uid: user.uid, email: <string>user.email, userName: user.displayName || form.name, photoURL: <string>user.photoURL }
    this.db.addUser(activeUser)
    this.authService.navigation()
  }

}

