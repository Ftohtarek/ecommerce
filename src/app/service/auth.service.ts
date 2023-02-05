import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider, FacebookAuthProvider, GoogleAuthProvider, User } from 'firebase/auth';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public auth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private user: UsersService) { }

  AuthWithPopup = (provider: AuthProvider, callbackSuccess = (user: User) => { }, callbackError = (error: Error) => { }) => {
    this.auth.signInWithPopup(provider)
      .then(responce => callbackSuccess(<User>responce.user))
      .catch(error => callbackError(error))
  }

  get facebookProvider() { return new FacebookAuthProvider() }

  get googleProvider() { return new GoogleAuthProvider() }

  AuthWithEmail(provider: Promise<any>, Success = (user: User) => { }, catchError = (error: Error) => { }) {
    provider
      .then(responce => Success(<User>responce.user))
      .catch(error => catchError(error))
  }

  signin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  navigation() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    this.router.navigate([returnUrl])
  }

  logout() {
    this.auth.signOut()
  }

}
