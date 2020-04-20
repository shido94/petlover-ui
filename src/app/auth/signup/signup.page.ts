import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { regexValidators } from '../../validators/validators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, public loadingController: LoadingController) {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern(regexValidators.email),
        Validators.required
      ])
    ],
      password: ['', Validators.compose([
        Validators.pattern(regexValidators.password),
        Validators.required
      ])],
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  signUp() {
    console.log(this.signupForm.value);
    this.authService.userSignup(this.signupForm.value).subscribe();
  }


}
