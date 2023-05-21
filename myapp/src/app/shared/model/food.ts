export class Foods{
    id!:number;//using ! so that no need to create constructor (feature of Angular 13)
    name!:string;
    price!:number;
    cookTime!:string;
    favorite:boolean=false;
    origins!:string[];
    star:number=0;//no need to use exclamation symbol once we initialize value to variable
    imageUrl!:string;
    tag!:string[];
   
    

}