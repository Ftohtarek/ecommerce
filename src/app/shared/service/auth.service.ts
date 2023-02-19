import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider, FacebookAuthProvider, GoogleAuthProvider, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public auth: AngularFireAuth, private route: ActivatedRoute, private router: Router,) { }

  AuthWithPopup = (provider: AuthProvider, Success = (user: User) => { }, Error = (error: Error) => { }) => {
    this.auth.signInWithPopup(provider)
      .then(responce => Success(<User>responce.user))
      .catch(error => Error(error))
  }

  get facebookProvider() { return new FacebookAuthProvider() }

  get googleProvider() { return new GoogleAuthProvider() }

  signUpWithEmail(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  signInWithEmail(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  navigation() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    this.router.navigate([returnUrl])
  }

  logout() {
    this.auth.signOut()
  }

}
