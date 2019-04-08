import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const categoriesRoute: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'new', component: CategoryFormComponent },
  { path: ':id', component: CategoryFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(categoriesRoute)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
