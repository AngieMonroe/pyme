import { Component, OnInit } from '@angular/core';
import { ConectionDataService } from '../../../services/conection-data.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take, debounceTime } from 'rxjs/operators'




@Component({
  selector: 'app-registry-data',
  templateUrl: './registry-data.component.html',
  styleUrls: ['./registry-data.component.css']
})
export class RegistryDataComponent implements OnInit {
  item:any = {
    name:null,
    firstName: null,
    rfc:null,
    age: null,
    phone:null,
    email:null,
    password:null
  }
  registerForm: FormGroup;
  submitted = false;

  constructor(private connection:ConectionDataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators]],
      firstName: ['', [Validators, Validators]],
      rfc: ['', [Validators, Validators.minLength(10)]],
      age: ['', [Validators, Validators.maxLength(2)]],
      phone: ['', [Validators, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  // get email(){
  //   return this.registerForm.get('email')
  // }

  addItem(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.connection.addItem(this.item)
  }

}

// export class CustomValidator {
//   static email(asf:AngularFirestore) {
//     return (control:AbstractControl) => {
      
//       const email = control.value.toLowerCase();

//       return asf.collection('items', ref => ref.where('email', '==', email))

//       .valueChanges().pipe(debounceTime(500),
//       take(1),
//       map(array => array.length ? { emailAvailable: false} :null )
//       )
//     }
//   }
// }