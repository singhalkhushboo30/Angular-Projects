import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { Tag } from '../shared/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags!:string[];

  tags:Tag[]|any;
  
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
     this.tags=this.foodService.getAllTag();
  }

}
