import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   displayProducts:product[]=[];
   trendyProducts:product[]=[];
  constructor(private productService:ProductService) { }
   
  ngOnInit(): void {
    this.productService.displayProducts().subscribe((result)=>{
      console.log(result);
      this.displayProducts=result;
    });
    this.productService.trendyProducts().subscribe((result1)=>{
      console.log(result1);
       this.trendyProducts=result1;
    })
  }

}
