import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from  '@angular/fire/auth';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pyme';
  user: firebase.User;
  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  ngOnInit(){
  }
}
