import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService,private route:Router) { }
  showLogin=true;
  authError:string='' ;
  ngOnInit(): void {
    this.seller.reloadSeller(); }
  signUp(data:signUp):void{
    console.warn(data);
    this.seller.userSignUp(data);}
  login(data:login){
    this.authError="";
      console.warn(data);
    this.seller.userLogin(data); 
    this.seller.isLoginError.subscribe((error)=>{
      if(error){
        this.authError="email or password is incorrect";
      }
    })
  }
  openLogin(){
    this.showLogin=true;
    console.log(this.showLogin); }
  openSignUp(){
    this.showLogin=false;
    console.log(this.showLogin);}
}
