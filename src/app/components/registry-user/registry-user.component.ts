import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from  '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-registry-user',
  templateUrl: './registry-user.component.html',
  styleUrls: ['./registry-user.component.css']
})
export class RegistryUserComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private afAuth: AngularFireAuth, private formBuilder: FormBuilder) { }
  email: string;
  password: string;
  registerForm: FormGroup;
  submitted = false;
  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onUserRegistre(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.registerUser(this.email,this.password)
    .then((response)=> {
      this.router.navigate(['home']);
    })
    .catch(err => console.log('error al registrar', err.message))
  }

}
  

