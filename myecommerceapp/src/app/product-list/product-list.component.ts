import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  datas:product[]=[];
  deleteIcon=faTrash;
  editIcon=faEdit;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.allProductList();
  }
  delete(id:number){
    this.productService.deleteProduct(id);
}
  allProductList():void{
    let result=localStorage.getItem('productData');
    let datas=result && JSON.parse(result);
  }
  
  

}
