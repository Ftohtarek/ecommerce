import { Injectable } from '@angular/core';
import { AuthProvider } from 'firebase/auth';
import { Signin } from '../models/signin';
import { Signinerror } from '../models/signinerror';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService implements Signin {

  Error: Signinerror = <Signinerror>{}


  constructor(private authService: AuthService, private db: UsersService) { }

  signinWithFacebook = () => { this.signinWith(this.authService.facebookProvider) }

  signinWithGoogle = () => { this.signinWith(this.authService.googleProvider) }

  /**
   * @param {AuthProvider} provider detect which provider will use. they already store in auth service
   * @implements {authService.provider()}  that have three Arguments
   * @example authService.provider(authService.facebookprovider ,
   * (user:User)=>console.log(user),
   * (error:Error)=>console.log(error)
   * )
   */

  private signinWith(provider: AuthProvider) {
    this.authService.AuthWithPopup(provider,
      user => this.db.checkEmailExist(user.uid).subscribe(
        isExist => {
          if (isExist)
            this.authService.navigation();
          else {
            this.authService.logout()
            this.Error = { providerNoEmail: true };
          }
        }),
      error => this.Error = { providerFaild: true }
    )
  }

  signinWithEmail(form: any) {
    this.authService.AuthWithEmail(this.authService.signin(form.email, form.password),
      user => this.authService.navigation(),
      error => this.causeBecause(error)
    )
  }

  private causeBecause(error: Error) {

    if (error.message.includes('auth/wrong-password')) { this.Error = { wrongPassword: true } }
    else if (error.message.includes('auth/user-not-found')) { this.Error = { nativeEmailnoEmail: true } }
    else { this.Error = { nativeEmailFaild: true } }
  }

}
