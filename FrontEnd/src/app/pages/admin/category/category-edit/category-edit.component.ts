import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICate } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-category-edit',
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent {
    category: ICate = {
        name: '',
    };
    categoryForm = this.formBuilder.group({
        name: [''],
    });
    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        // Observable
        this.route.paramMap.subscribe((param) => {
            const id = Number(param.get('id'));
            this.categoryService.getCategoryById(id).subscribe((category) => {
                this.category = category;
                this.categoryForm.patchValue({
                    name: category.name,
                });
            });
        });
    }
    onHandleSubmit() {
        if (this.categoryForm.invalid) return;

        const category: ICate = {
            id: this.category.id,
            name: this.categoryForm.value.name || '',
        };
        this.categoryService.updateCategory(category).subscribe((data) => {
            console.log(data);
        });

        this.router.navigate(['admin/categories']);
    }
}
