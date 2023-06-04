import { Component } from '@angular/core';
import { ICate } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
    categories: ICate[] = [];

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategory().subscribe(
            (data) => {
                this.categories = data;
            },
            (error) => console.log(error.message)
        );
    }
    removeItem(id: any) {
        this.categoryService.deleteCategory(id).subscribe(() => {
            this.categories = this.categories.filter((item) => item.id !== id);
        });
    }
}
