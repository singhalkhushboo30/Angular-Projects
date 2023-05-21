import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp ,product} from '../data-type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showLogin=true;
   email='';
   password='';
   message='User is already registered.';
   signUpMessage:boolean=false;
   invalidLogin=false;
   
  
   constructor(private route:Router) { }

   ngOnInit(): void {
   }
  
  userSignUp(data:signUp){
    console.warn(data);
    let result=localStorage.getItem('userSignUp');
    console.log(result);
    console.log(data);
    if(result==null){
      let userData:any=[];
      userData.push(data);
      localStorage.setItem('userSignUp',JSON.stringify(userData));
      this.route.navigate(['home'])
    }else{
      //fetch email from data
      let resultArray:signUp[]=JSON.parse(result);
      let userEmail = resultArray.find((item:any)=> item.email== data.email);
      console.log(userEmail);
      if(typeof userEmail==="undefined"){
         resultArray.push(data);
         localStorage.setItem('userSignUp',JSON.stringify(resultArray));
         this.signUpMessage=false;
      }
      else{
        this.signUpMessage=true;
      }
      this.route.navigate(['home'])
      //check if fetch email available in the localStorage
      //resultArray.push(data);
      //localStorage.setItem('sellerSignUp',JSON.stringify(resultArray));
    }
    
  }
  userLogin(data:login){
    console.log(data);
    let result:any=localStorage.getItem('userSignUp');
    let resultArray:any=JSON.parse(result);
    let userEmail:boolean=resultArray.find((item:any)=>item.email==data.email);
    if(userEmail){
      localStorage.setItem('userLogin',JSON.stringify(data));
          this.route.navigate(['home']);
          console.log("user has logged in successfully");
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
