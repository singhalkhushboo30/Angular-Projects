import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productData:product|undefined;
  productMessage:string='';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  submit(data:any){
    localStorage.setItem('productData',JSON.stringify(data));

  }

}
