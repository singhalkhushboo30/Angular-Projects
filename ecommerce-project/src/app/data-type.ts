export interface signUp{
    
    name:string;
    email:string;
    password:string;
}

export interface login{
    email:string;
    password:string;
}

export interface product{
    id:number;
    name:string;
    price:number;
    color:string;
    category:string;
    description:string;
    imageUrl:string;
    quantity:number;
   productId:number|undefined;
}
export interface cart{
    id:number|undefined;
    name:string;
    price:number;
    color:string;
    category:string;
    description:string;
    imageUrl:string;
    quantity:number|undefined;
    userId:number;
    productId:number;
}
export interface priceSummary{
    price:number;
    discount:number;
    tax:number;
    deliveryCharges:number;
    total:number;
}
export interface order{
    email:string;
    address:string;
    contact:string;
    totalPrice:number;
    userId:number;
    id:number|undefined;
}