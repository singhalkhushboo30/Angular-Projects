import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    isUserLogIn:boolean=false;
   constructor(public authenticationService:AuthenticationService) { }

  ngOnInit(): void {
   this.isUserLogIn=this.authenticationService.isUserLoggedIn();
     
  }

}
