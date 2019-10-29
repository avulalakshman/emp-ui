import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp/emp.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private empService:EmpService,
    private authService:AuthService
    ) { }
  username: string;
  password: string;
  
  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.router.navigate(["emp"]);
    }
  }
  login(): void {
    let token = ""
    this.empService.login(this.username,this.password).subscribe(data=>{
        if(data["token"]){
          token = data["token"];
          this.authService.setToken(token);
          this.router.navigate(["emp"]);
        }else{
          return;
        }
    })
   
   
  }

  
}


