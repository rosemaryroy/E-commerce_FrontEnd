import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { AllMedicinesComponent } from './all-medicines/all-medicines.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';
import { HomeComponent } from './home/home.component';
// import { AllskincareComponent } from './allskincare/allskincare.component';
// import { ViewSkinCareComponent } from './view-skin-care/view-skin-care.component';


@NgModule({
    declarations: [
        MedicinesComponent,
        AllMedicinesComponent,
        CartComponent,
        WishlistComponent,
        ViewMedicineComponent,
        FilterPipe,
        HomeComponent,
       
    ],
    imports: [
        CommonModule,
        MedicinesRoutingModule,
        HttpClientModule,
        
    ]
})
export class MedicinesModule { }
