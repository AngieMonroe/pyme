import { Component, OnInit } from '@angular/core';
import { ConectionDataService } from '../../../services/conection-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';




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
  status = '';

  constructor(private connection:ConectionDataService, private formBuilder: FormBuilder, private afs:AngularFirestore) { }

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


  addItem(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.connection.addItem(this.item)

    this.registerForm.reset();
  }
  
  emailcheck($event) {
    let q = $event.target.value;
      let collref = this.afs.collection('items').ref;
      let queryref = collref.where('email', '==', q);
      queryref.get().then((snapShot) => {
        if (snapShot.empty) {
          this.status = '';
        }
        else {
          this.status = 'El email ya existe en el sistema';
        }
      })
    }
  }

