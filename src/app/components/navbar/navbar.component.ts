import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nameUser: string;
  public userEmail: string;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  logoutUser(){
    this.authService.isLogOut()
    .then((response) => {
      this.router.navigate(['']);
    })
    .catch(err=> console.log('error', err.message))
  }
}
