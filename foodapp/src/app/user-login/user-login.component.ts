import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    form.reset();
  }

}

export interface User{

  email:string;
  password:string;
}
