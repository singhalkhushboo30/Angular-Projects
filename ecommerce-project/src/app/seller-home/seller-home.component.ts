import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productData:product[]=[]; 
  productMessage:string='';
  deleteIcon=faTrash;
  editIcon=faEdit;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.allProductList();
  }
  delete(id:number){
        console.log("delete product ",id);
        this.productService.deleteProduct(id).subscribe((result:any)=>{
          if(result){
            this.productMessage="Product is successfully deleted";
            this.allProductList();
          }
        })
        setTimeout(()=>{
          this.productMessage='';
        },900);
  }

  allProductList(){
    this.productService.productList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productData=result;
      }    
    })
  }

}
