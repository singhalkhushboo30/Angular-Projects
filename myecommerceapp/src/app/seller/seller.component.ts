import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp ,product} from '../data-type';
import {SellerService} from '../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
   showLogin=true;
   email='';
   password='';
   signUpMessage:boolean=false;
   message='Seller is already registered';
   invalidLogin=false;
  constructor(private sellerService:SellerService,private route:Router) { }

  ngOnInit(): void {
  }
  sellerSignUp(data:signUp){
    console.warn(data);
    let result=localStorage.getItem('sellerSignUp');
    console.log(result);
    console.log(data);
    if(result==null){
      let sellerData:any=[];
      sellerData.push(data);
      localStorage.setItem('sellerSignUp',JSON.stringify(sellerData));
      this.route.navigate(['home'])
    }else{
      //fetch email from data
      let resultArray:signUp[]=JSON.parse(result);
      let sellerEmail = resultArray.find((item:any)=> item.email== data.email);
      console.log(sellerEmail);
      if(typeof sellerEmail==="undefined"){
        resultArray.push(data);
        localStorage.setItem('userSignUp',JSON.stringify(resultArray));
        this.signUpMessage=false;
        this.route.navigate(['home'])
     }
     else{
       this.signUpMessage=true;
     }
      
      //check if fetch email available in the localStorage
      //resultArray.push(data);
      //localStorage.setItem('sellerSignUp',JSON.stringify(resultArray));
    }
    
  }
  sellerLogin(data:login){
    console.log(data);
    let result:any=localStorage.getItem('sellerSignUp');
    let resultArray:any=JSON.parse(result);
    let sellerEmail:boolean=resultArray.find((item:any)=>item.email==data.email);
    if(sellerEmail){
      localStorage.setItem('sellerLogin',JSON.stringify(data));
          this.route.navigate(['add-product']);
          console.log("Seller has logged in successfully");
    }
    else{
      console.log("Please signup first");
      this.route.navigate(['home'])
    }
  }

  openSignUp(){
    this.showLogin=false;
    console.warn(this.showLogin);
  }
  openLogin(){
    this.showLogin=true;
    console.warn(this.showLogin);
  }
}
