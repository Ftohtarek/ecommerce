import { Injectable } from '@angular/core';
import { AuthProvider, User } from 'firebase/auth';
import { Subscription } from 'rxjs';
import { AuthService } from 'shared/service/auth.service';
import { UsersService } from 'shared/service/users.service';
import { RegisterErrors } from '../models/register-errors';
import { Registeration } from '../models/registeration';


@Injectable({
  providedIn: 'root'
})
export class RegisterService implements Registeration {
  Error: RegisterErrors = <RegisterErrors>{}
  subscribe: Subscription = <Subscription>{}
  constructor(private authService: AuthService, private db: UsersService) { }

  registerWithFacebook = () => { this.registerWithPopup(this.authService.facebookProvider) }

  registerWithGoogle = () => { this.registerWithPopup(this.authService.googleProvider) }

  /**
   * @param {AuthProvider} provider detect which provider will use. they already store in auth service
   * @implements {authService.provider()}  that have three Arguments
   * @example authService.provider(authService.facebookprovider ,
   * (user:User)=>console.log(user),
   * (error:Error)=>console.log(error)
   * )
   */

  private registerWithPopup(provider: AuthProvider) {
    this.authService.AuthWithPopup(provider,
      user => this.popupSuccess(user),
      error => this.Error = { registerFaildFromProvider: true }
    )

  }

  popupSuccess(user: User) {
    this.subscribe = this.db.checkEmailExist(user.uid).subscribe(isExist => {
      if (isExist) {
        this.authService.logout()
        return this.Error = { emailExistFromProvider: true };
      }

      this.db.addUser(user.uid, <string>user.email, <string>user.displayName, user.uid, <string>user.photoURL)
      this.authService.navigation()
      return this.subscribe.unsubscribe()
    })
  }

  registerWithNativeEmail(form: any) {
    this.authService.AuthWithEmail(this.authService.signup(form.email, form.password),
      user => this.db.addUser(user.uid, <string>user.email, <string>form.name, user.uid),
      error => this.causeBecause(error)
    )
  }

  private causeBecause = (error: Error) => {
    this.Error = error.message?.includes('(auth/email-already-in-use)') ?
      { emailExistFromNativeEmail: true } : { registerFaildFromNativeEmail: true }
  }

}

