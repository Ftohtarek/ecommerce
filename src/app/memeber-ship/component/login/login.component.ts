import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { SigninService } from 'app/memeber-ship/services/signin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isVisible: boolean = false;
  
  signinFormGroup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]),
  })

  constructor(public signin: SigninService) { }

  login() {
    if (this.signinFormGroup.valid)
      this.signin.signinWithEmail(this.signinFormGroup.value)
  }

}
