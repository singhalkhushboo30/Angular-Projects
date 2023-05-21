import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  productMessage:string|undefined='';
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
  }
  productData(data:product){
     console.warn("new product data",data);
     this.productService.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productMessage="Product added successfully"
      }
     });
     setTimeout(()=>this.productMessage=undefined,3000);
  }

}
