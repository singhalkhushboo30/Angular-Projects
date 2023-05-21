import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SellerComponent } from './seller/seller.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'seller',component:SellerComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'update-product/:id',component:UpdateProductComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
