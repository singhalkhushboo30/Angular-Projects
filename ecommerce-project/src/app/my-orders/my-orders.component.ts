import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderData:order[]|undefined;
  constructor(private productService:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.productService.orderList().subscribe((result)=>{
      this.orderData=result;
    })
  }

}
