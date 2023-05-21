import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {
  }
  message:string|undefined=this.productService.productMessage;
  productData(data:product){
    console.warn("new product data",data);
    this.productService.addProduct(data);
    
 }

}
