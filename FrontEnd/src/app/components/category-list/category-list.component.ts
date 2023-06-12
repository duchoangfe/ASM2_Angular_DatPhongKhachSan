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
            (data: any) => {
                this.categories = data.categories;
            },
            (error) => console.log(error.message)
        );
    }
    removeItem(_id: any) {
        if (window.confirm('Bạn có muốn xóa không ?')) {
            this.categoryService.deleteCategory(_id).subscribe(() => {
                console.log(_id);
                this.categories = this.categories.filter(
                    (item) => item._id !== _id
                );
            });
        }
    }
}
