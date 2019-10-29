import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userLoggedInStatus = new Subject<boolean>();
  constructor(private router:Router) { }

  setToken(token){
     this.userLoggedInStatus.next(true);
      localStorage.setItem("token",token);
  }
  getToken(){
     return localStorage.getItem("token");
  }
  isLoggedIn(){
    if(this.getToken()){
     
      return true;
    }
    else
    return false;
  }
  logOut(){
    localStorage.removeItem("token");
    this.userLoggedInStatus.next(false);
    this.router.navigate(["login"]);
  }
}
