import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='mahi';
  password='password';
  invalidLogin=false;
  errorMessage="Invalid Credentials"

  constructor(private route:Router,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.authenticationService.authenticate(this.username,this.password)){
      this.route.navigate(['welcome',this.username]);
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
   // console.log(this.username);
    //console.log(this.password);
  }

}
