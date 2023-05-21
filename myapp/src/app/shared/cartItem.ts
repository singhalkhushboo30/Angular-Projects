import { Foods } from "./model/food";

export class CartItem{
    food:Foods|any;
    quantity:number=1;
    
    constructor(food:Foods){
        this.food=food;
    }

    get price():number{
        return this.food.price*this.quantity ;
    }
}