import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../service/food.service';
import { Foods } from '../shared/model/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!:Foods|any;
  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id']){
       this.food= this.foodService.getFoodById(params['id']);}
      })
  }

}
