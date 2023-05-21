import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {signUp,login} from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUserAuth=new EventEmitter<boolean>(false);
  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(user:signUp){
      this.http.post("http://localhost:3000/users",user,{observe:'response'}).subscribe(
        (result)=>{
          console.warn(result);
          if(result){
            localStorage.setItem('user',JSON.stringify(result.body));
            this.router.navigate(['/']);
          }
        }
      )
  }
  userLogin(user:login){
       this.http.get(`http://localhost:3000/users?email=${user.email}&password=${user.password}`,
       {observe:'response'}).subscribe((result)=>{
        if(result && result.body){
          this.invalidUserAuth.emit(true);
          localStorage.setItem('user',JSON.stringify(result.body));
          this.router.navigate(['/']);
        }
        else{
          this.invalidUserAuth.emit(false);
        }
       });
  }
  // userAuthReload(){
  //   if(localStorage.getItem('user')){
  //     this.router.navigate(['/']);
  //   }
  // }
}
