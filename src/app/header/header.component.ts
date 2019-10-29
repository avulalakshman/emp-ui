import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn=false;
  constructor(private authSerive:AuthService) { }

  ngOnInit() {
    this.authSerive.userLoggedInStatus.subscribe(data=>{
      console.log(data);
      this.loggedIn = data;
    })
  }
  logOut(){
    this.authSerive.logOut();
  }

}
