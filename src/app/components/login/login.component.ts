import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  registerForm: FormGroup;
  submitted = false;


  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder 
    ) { }
  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }

  onLoginGoogle(): void {
    console.log('entre')
    this.authService.loginGoogle()
    .then((response) => {
      console.log(response)
      this.router.navigate(['/home']);
    })
    .catch(err=> console.log('error', err.message))
  }
  onLoginUser(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.loginUser(this.email, this.password)
    .then((response)=> {
      this.router.navigate(['/home']);
    })
    .catch(err => console.log('error', err.message))
  }

}
