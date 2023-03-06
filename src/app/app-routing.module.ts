import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{ path: 'medicines', loadChildren: () => import('./medicines/medicines.module').then(m => m.MedicinesModule) },
// redirect to all-procucts page
{path:'',redirectTo:'medicines',pathMatch:'full'},
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
// page not found
{path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
