import { Injectable } from '@angular/core';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  '@angular/fire/auth';
import { map } from 'rxjs/operators';


@Injectable()

export class AuthService {
  
  constructor(public  afAuth:  AngularFireAuth) { }

    registerUser(email:string, password:string){
      return new Promise((resolve,reject)=> {
        this.afAuth.auth.createUserWithEmailAndPassword(email,password)
        .then (userData => resolve(userData),
        err => reject(err));
      })

    }
    
    loginUser(email:string, password: string){
      return new Promise((resolve,reject)=> {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then (userData => resolve(userData),
        err => reject(err));
      })

    }

    loginGoogle(){
      return this.afAuth.auth.signInWithPopup (new auth.GoogleAuthProvider());
    }

    isAuth(){
      return this.afAuth.authState.pipe(map(data => data));
    }

    isLogOut(){
      return new Promise((resolve, reject) => {
        this.afAuth.auth.signOut()
      .then(function() {
          console.log('Saliendo...');
        })
        .catch(function(error) {
          console.log(error);
        });

    })

}

}