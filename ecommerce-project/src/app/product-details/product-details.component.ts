import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, product } from '../data-type';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData:undefined|product;
  productQuantity:number=1;
  removeCart:boolean=false;
  cartData:product|undefined;
  //quantity:number=1;
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.productService.getProduct(productId).subscribe((result)=>{
      console.warn(result);      
      this.productData=result;

      let cartData=localStorage.getItem('localCart');
      if(cartData && productId){
            let items=JSON.parse(cartData);
            items=items.filter((item:product)=>productId==item.id.toString())
            if(items.length){
              this.removeCart=true;            }
              else{
                this.removeCart=false;
              }
      }
      let user=localStorage.getItem('user');
      if(user){
        let userId=user && JSON.parse(user).id;
        this.productService.getCartList(userId);
        this.productService.cartData.subscribe((result)=>{
          let item= result.filter((item:product)=>productId?.toString()===item.productId?.toString());
          if(item.length){
            this.cartData=item[0];
                  this.removeCart=true;
          }
        })
      }
      

     
    })
      

    
  }
  handleQuantity(value:string){
       if(this.productQuantity<20 && value==='plus'){
        this.productQuantity+=1;
       }
       else if(this.productQuantity>1 && value==='min'){
        this.productQuantity-=1;
       }
  }

  addToCart(){
    if(this.productData){
      this.productData.quantity=this.productQuantity;    
      if(!localStorage.getItem('user')){
     //   console.warn(this.productData);
        this.productService.localAddToCart(this.productData);
        this.removeCart=true;
      }
      else{
       // console.warn("user is logged in");
        let user=localStorage.getItem('user');
        let userId=user && JSON.parse(user).id;
       // console.warn(userId);
        let cartData:cart={
          ...this.productData,
          userId,productId:this.productData.id
        }
        delete cartData.id;
       // console.warn(cartData);
        this.productService.addToCart(cartData).subscribe((result)=>{
        if(result){
          this.productService.getCartList(userId);
          this.removeCart=true;
          alert('Product is added in cart');
        }
        })
      }
    }
  }
  removeToCart(productId:number){
    if(!localStorage.getItem('user')){
     this.productService.localRemoveToCart(productId);
     }
     else{
      let user=localStorage.getItem('user');
      let userId=user && JSON.parse(user).id;
        console.warn(this.cartData);
        this.cartData && this.productService.removeToCart(this.cartData.id).subscribe((result)=>{
           if(result){
            this.productService.getCartList(userId);
           }
        });
        this.removeCart=false;
     }
  }
    
}
