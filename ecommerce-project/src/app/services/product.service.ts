import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { product,cart ,order} from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData=new EventEmitter<product[]|[]>();
  constructor(private http:HttpClient) { }
  addProduct(data:product){
    console.log("service called");
    return this.http.post('http://localhost:3000/products',data);
  }

  productList(){
    //getting all product data so we used product as array type
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id:string){
    //getting single product data so we used product only to define type of data we are fetching
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product);
    console.log("product updated");
  }

  displayProducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=5');
  }

  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=6');
  }
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }
 localAddToCart(data:product){
  let cartData=[];
  let localCart=localStorage.getItem('localCart');
  if(!localCart){
     localStorage.setItem('localCart',JSON.stringify([data]));
     this.cartData.emit([data]);
  }
  else{
    cartData=JSON.parse(localCart);
    cartData.push(data);
    localStorage.setItem('localCart',JSON.stringify(cartData));
  }
  this.cartData.emit(cartData);
 }
 
localRemoveToCart(productId:number){
  let cartData=localStorage.getItem('localCart');
  if(cartData){
    let items:product[]=JSON.parse(cartData);
    items=items.filter((item:product)=>productId!==item.id)
  //  console.warn(items);
     localStorage.setItem('localCart',JSON.stringify(items));
     this.cartData.emit(items);
    }
  }

  addToCart(cartData:cart
    ){
         return this.http.post('http://localhost:3000/cart',cartData);
  }
  getCartList(userId:number){
     return this.http.get<product[]>('http.//localhost:3000/cart?userId='+userId,{observe:'response'}).subscribe((result)=>{
     console.warn(result);
     if(result && result.body) {
      this.cartData.emit(result.body);
     }
     
     });
  }
  
  removeToCart(cartId:number){
    return this.http.delete('http://localhost:3000/cart/'+cartId);
  }
  currentCart(){
    let userStore=localStorage.getItem('user');
    let userData=userStore && JSON.parse(userStore);
    return this.http.get<cart[]>('http://localhost:3000/cart?userId='+userData[0].id);
  }
  orderNow(data:order){
    return this.http.post('http://localhost:3000/orders',data);
  }
  orderList(){
    let userStore=localStorage.getItem('user');
    let userData=userStore && JSON.parse(userStore);
    return this.http.get<order[]>('http://localhost:3000/orders?'+userData[0].id);
  }
}
  
  

