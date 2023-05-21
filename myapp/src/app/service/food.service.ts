import { Injectable } from '@angular/core';
import {Foods} from '../shared/model/food';
import {Tag} from '../shared/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
    
  }

  tag:any;

  getAllFoodByTag(tag:string):Foods[]{
    return tag=="All"?
    this.getAll():
    this.getAll().filter(food => food.tag?.includes(tag));
    // if(tag=='All'){
    //   return this.getAll();
    // }
    // else{
    //   return this.getAll().filter(food=>food.tag?.includes(tag));
    // }
  }

  getAllTag():Tag[]{
    return [
      {name:'All',count:8},
      {name:'FastFood',count:7},
      {name:'Pizza',count:2},
      {name:'Burger',count:2},
      {name:'Soup',count:1},
      {name:'Lunch',count:7},
      {name:'Dinner',count:1},
      {name:'Manchurian',count:1},
      {name:'Pasta',count:1},
      {name:'French Fries',count:1}
    ]

  }
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Spicy tomato pizza',
        price:100,
        cookTime:'20-30',
        favorite:true,
        origins:['italy','india'],
        star:4.0,
        imageUrl:'assets/food-5.jpg',
        tag:['FastFood','Pizza','Lunch']
      },
      {
        id:2,
        name:'Manchurian',
        price:180,
        cookTime:'20-30',
        favorite:true,
        origins:['italy','india','belgium'],
        star:3.8,
        imageUrl:'assets/food-7.jpg',
        tag:['FastFood','Manchurian','Lunch']
      },
      {
        id:3,
        name:'Pasta',
        price:150,
        cookTime:'20-30',
        favorite:true,
        origins:['italy','china'],
        star:4.8,
        imageUrl:'assets/food-8.jpg',
        tag:['FastFood','Pasta','Lunch']
      },
      {
        id:4,
        name:'French Fries',
        price:120,
        cookTime:'30-40',
        favorite:true,
        origins:['france','belgium'],
        star:4.2,
        imageUrl:'assets/food-6.jpg',
        tag:['FastFood','Fry','Snacks']
      },
      {
        id:5,
        name:'Chicken Soup',
        price:120,
        cookTime:'20-30',
        favorite:false,
        origins:['india','asia'],
        star:3.0,
        imageUrl:'assets/img1.jpg',
        tag:['Soup','Dinner']
      },
      {
        id:6,
        name:'Cheese Burger',
        price:100,
        cookTime:'10-15',
        favorite:true,
        origins:['italy','china','india'],
        star:5.0,
        imageUrl:'assets/img2.jpg',
        tag:['FastFood','Burger','Lunch']
      },
      {
        id:7,
        name:'Vegetable spicy pizza',
        price:120,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'assets/food-4.jpg',
        tag:['FastFood','Pizza','Lunch']
      },
      {
        id:8,
        name:'Vegetable Burger',
        price:80,
        cookTime:'10-15',
        favorite:true,
        origins:['indian'],
        star:4.5,
        imageUrl:'assets/food-2.jpg',
        tag:['FastFood','Burger','Lunch']
      }
    ];

  }


}
