import { Component, OnInit,EventEmitter } from '@angular/core';
import {signUp,login,product,cart} from '../data-type';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  authError:string='';
  constructor(private userService:UserService,private productService:ProductService) { }
  
  showLogin:boolean=true;
  ngOnInit(): void {
   // this.userService.userAuthReload();
  }

  signUp(data:signUp){
     //console.warn(data);
     this.userService.userSignUp(data);
  }

  login(data:login){
    this.authError="";
    this.userService.userLogin(data);
    this.userService.invalidUserAuth.subscribe((result)=>{
      console.log("result",result);
      if(result){
        this.authError="email or password is incorrect";
      }else{
        this.localCartToRemoteCart();
      }
    })
  }
  openSignUp(){
    this.showLogin=false;
    console.warn(this.showLogin);
  }
  openLogin(){
    this.showLogin=true;
    console.warn(this.showLogin);
  }
  //adding data from local Storage to database
  localCartToRemoteCart(){
       let data=localStorage.getItem('localCart');
       let user=localStorage.getItem('user');
        let userId=user && JSON.parse(user).id;
       if(data){
        let cartDataList:product[]=JSON.parse(data);
        
        cartDataList.forEach((product:product,index)=>{
             let cartData:cart={
              ...product,
              productId:product.id,
              userId

             };
             delete cartData.id;
            setTimeout(()=>{
              this.productService.addToCart(cartData).subscribe((result)=>{
                if(result){
                 console.warn("Item stored in database");
                }
            })
            if(cartDataList.length===index+1){
              localStorage.removeItem('localCart');
            }
            },500);
        })
       }
       setTimeout(()=>{
        this.productService.getCartList(userId);
       },2000);
  }
}


