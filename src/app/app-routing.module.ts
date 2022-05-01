import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductmanageComponent } from './productmanage/productmanage.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ArrayassignmentComponent } from './arrayassignment/arrayassignment.component';
import { BootStrapComponent } from './boot-strap/boot-strap.component';

const routes: Routes = [
  {path: 'productmanage',component: ProductmanageComponent},
  {path: 'user-details',component: UserDetailsComponent},
  {path: 'arrayassignment',component: ArrayassignmentComponent},
  {path: 'BootStrap',component: BootStrapComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
