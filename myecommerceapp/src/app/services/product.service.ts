import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productMessage:string|undefined='';
  constructor() { }

  addProduct(data:product):void{
    localStorage.setItem('productData',JSON.stringify(data));
    let result=localStorage.getItem('productData');
    if(result){
      this.productMessage='Product added successfully.'
    }
    else{
      this.productMessage='Please add carefully.'
    }
  }

  deleteProduct(id:number):void{
    let result=localStorage.getItem('productData');
    let dataId=result && JSON.parse(result).id;
    if(id===dataId){
      localStorage.removeItem('productData');
    }
  }


}

