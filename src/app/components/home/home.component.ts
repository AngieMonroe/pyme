import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLogin: boolean;
  public nameUser: string;
  public userEmail: string;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuth().subscribe(auth => {
      if(auth){
        this.isLogin = true;
        this.nameUser = auth.displayName;
        this.userEmail = auth.email
      } else {
        this.isLogin = false;
      }
    })
  }
  logoutUser(){
    this.authService.isLogOut()
    .then((response) => {
      this.router.navigate(['']);
    })
    .catch(err=> console.log('error', err.message))
  }

}
