import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMedicinesComponent } from './all-medicines/all-medicines.component';
// import { AllskincareComponent } from './allskincare/allskincare.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
// import { MedicinesComponent } from './medicines.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
// import { ViewSkinCareComponent } from './view-skin-care/view-skin-care.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  // home component
  {path:'',component:HomeComponent},
  // AllMedicinesComponent 
  { path: 'allmedicines', component: AllMedicinesComponent },
  // cart
 {path:'cart/:m_id',component: CartComponent},
  // wishlist
{path:'wishlist', component:WishlistComponent},
  // view medicine
  {path:'view_medicine/:id',component:ViewMedicineComponent},
  // all-skin care
  // {path:'allskincare',component:AllskincareComponent},
  // // view skin care
  // {path:'view_skincare/:id',component:ViewSkinCareComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }
