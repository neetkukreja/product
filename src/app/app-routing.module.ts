import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductmanageComponent } from './productmanage/productmanage.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'productmanage',component: ProductmanageComponent},
  {path: 'user-details',component: UserDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
