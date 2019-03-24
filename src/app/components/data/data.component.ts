import { Component, OnInit } from '@angular/core';
import { ConectionDataService } from '../../../services/conection-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EDEADLK } from 'constants';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  items: any;
  editItem: any = {
    name:'',
    firstName: '',
    rfc:'',
    age: '',
    phone:'',
    email:'',
    password:''
  }
  registerForm: FormGroup;
  submitted = false;

  constructor(private connection: ConectionDataService, private formBuilder: FormBuilder) { 
    this.connection.listItem().subscribe(item => {
      this.items = item;
      console.log(this.items)
    })
  } 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators]],
      firstName: ['', [Validators, Validators]],
      rfc: ['', [Validators, Validators.minLength(10)]],
      age: ['', [Validators, Validators.maxLength(2)]],
      phone: ['', [Validators, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }


  delete(item){
    if(confirm('Estas seguro que deseas eliminar el registro')){
      this.connection.deleteItem(item);
    }
  }

  edit(item){
    this.editItem = item;
  }

  saveEdit(){
    this.connection.editItem(this.editItem);
  }

}
