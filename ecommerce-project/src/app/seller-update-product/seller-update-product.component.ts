import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData:product|undefined;
  productMessage:string='';
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');
    console.log(productId);
    productId && this.productService.getProduct(productId).subscribe((result)=>{
      console.log(result);
      this.productData=result;
    })
  }
  submit(data:any){
    console.warn("updated data ",data);
    if(this.productData){
      data.id=this.productData.id;
        }
    this.productService.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Product has been updated successfully";
      }
    });
    setTimeout(()=>{this.productMessage=''},900);
  }
  

}
