import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'e-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {
  isVisible: boolean = false

  signupFormGroup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]),
    'name': new FormControl('', [Validators.required, Validators.pattern(/([a-z]|[0-9]).{2,}/)]),
    'gender': new FormControl('', [Validators.required, Validators.pattern(/[0,1]/)])
  })

  constructor(public register: RegisterService) { }

  signup() {
    if (this.signupFormGroup.valid)
      this.register.registerWithNativeEmail(this.signupFormGroup.value);

    this.signupFormGroup.markAllAsTouched()
  }

}
