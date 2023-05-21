import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult:undefined|product[];
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    let query=this.route.snapshot.paramMap.get('query');
    console.warn(query);
    query && this.productService.searchProducts(query).subscribe(result=>{
         this.searchResult=result;
    })
  }

}
