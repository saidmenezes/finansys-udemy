import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private pCategoryService: CategoryService) { }

  // Regiao de declaracao de variaveis
  vCategories: Category[] = [];

  ngOnInit() {
    this.pCategoryService.getAll().subscribe((cat) => this.vCategories = cat, err => console.log(err));
  }

  delete(cat: Category) {
    this.pCategoryService.delete(cat.id)
        .subscribe((ret) => this.vCategories = this.vCategories.filter(row => row != cat), (err) => console.log(err));
  }

}
