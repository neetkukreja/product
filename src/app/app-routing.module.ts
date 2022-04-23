import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductmanageComponent } from './productmanage/productmanage.component';

const routes: Routes = [
  {path: 'productmanage',component: ProductmanageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
