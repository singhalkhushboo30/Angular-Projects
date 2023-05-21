import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string='default';
  sellerName:string='';
  userName:string='';
  searchResult:undefined|product[];
  cartItems=0;
  constructor(private route:Router,private productService:ProductService) { }

  ngOnInit(): void {
     this.route.events.subscribe((val:any)=>
     {
      
      if(val.url){
       if(localStorage.getItem('seller') && val.url.includes('seller')){
        // console.warn("In Seller Area");
          let sellerStore=localStorage.getItem('seller');
          let sellerData=sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.name;
          this.menuType='seller';
         
       }else if(localStorage.getItem('user') ){
        console.log("In user area");
            let userStore=localStorage.getItem('user');
            let userData=userStore && JSON.parse(userStore)[0];
            this.userName=userData.name;
            this.menuType='user';
            this.productService.getCartList(userData.id);
       }
       else{
        //console.warn("Outside Seller");
       this.menuType='default';
       }
      }
     });
      
      let cartData=localStorage.getItem('localCart');
     if(cartData){
      this.cartItems=JSON.parse(cartData).length;
     }
     this.productService.cartData.subscribe((items)=>{
      this.cartItems=items.length;
     })
  }
  sellerLogout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  userLogout(){
     localStorage.removeItem('user');
     this.route.navigate(['/user-auth']);
     this.productService.cartData.emit([]);
  }

  searchProduct(query:KeyboardEvent){
     if(query){
      const element=query.target as HTMLInputElement;
      //console.warn(element.value);
      this.productService.searchProducts(element.value).subscribe((data)=>{
         console.log(data);
        if( data.length>5){ data.length=5;}
         this.searchResult=data;
      })
     }
  }
  hideSearch(){
    this.searchResult=undefined;
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id]);
  }
  submitSearch(value:string){
         console.warn(value);
         this.route.navigate([`search/${value}`]);
  }

}
