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