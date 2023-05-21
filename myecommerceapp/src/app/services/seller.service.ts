import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private route:Router) { }

  signUp(data:signUp):void{
    localStorage.setItem('sellerSignUp',JSON.stringify(data));
    let result=localStorage.getItem('seller');
    if(result){
      console.warn(result);
      console.warn('Seller has signed up successfully');
      this.route.navigate(['home']);
    }else{
      console.warn('Please signup carefully');
      this.route.navigate(['home']);
    }
  }
  login(data:login):void{
    localStorage.setItem('sellerLogin',JSON.stringify(data));
    let loginData=localStorage.getItem('sellerLogin');
    let signUpData=localStorage.getItem('sellerSignUp');
    if(loginData && signUpData){
      let signUpEmail=JSON.parse(signUpData).email;
      let signUpPassword=JSON.parse(signUpData).password;
      let loginEmail=JSON.parse(loginData).email;
      let loginPassword=JSON.parse(loginData).password;
      if(signUpEmail===loginEmail && signUpPassword==loginPassword){
        console.warn('Seller has logged in successfully');
        console.warn(loginData);
        this.route.navigate(['product-list']);
      }
    }else{
      console.warn('Please signup carefully');
      this.route.navigate(['home']);
    }
  }
}
