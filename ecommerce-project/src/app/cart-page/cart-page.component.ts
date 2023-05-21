import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import {cart,priceSummary} from '../data-type';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private route:Router,private productService:ProductService) { }

  cartData:cart[]|undefined;
  priceSummary:priceSummary={
    price:0,
    deliveryCharges:0,
    tax:0,
    total:0,
    discount:0

  };
  ngOnInit(): void {
    this.productService.currentCart().subscribe((result)=>{
        this.cartData=result;
        let price=0;
        result.forEach((item)=>{
          if(item.quantity){
            price=price+(item.price*+item?.quantity);
          }
         
        })
     //   console.warn(price);
     this.priceSummary.price=price;
     this.priceSummary.tax=price/10;
     this.priceSummary.discount=price/10;
     this.priceSummary.deliveryCharges=100;
     this.priceSummary.total=price+(price/10)+100-(price/10);
     console.warn(this.priceSummary);
    })
  }
  checkout(){
    this.route.navigate(['/checkout']);
  }

}
