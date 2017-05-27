import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category } from './../category';

@Component({
  selector: 'category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.css']
})
export class CategoryBoxComponent {

  @Input() categories: Category[];

    @Output('categoryClick') selectCategoryRequest = new EventEmitter<Category>();

    selectCategory(category: Category) : void {
	this.selectCategoryRequest.emit(category);
    }
}
