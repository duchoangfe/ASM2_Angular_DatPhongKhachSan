import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICate } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category-add',
    templateUrl: './category-add.component.html',
    styleUrls: ['./category-add.component.scss'],
})
export class CategoryAddComponent {
    categoryForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private categoryService: CategoryService,
        private router: Router
    ) {}

    onHandleSubmit() {
        if (this.categoryForm.invalid) {
            return;
        }

        const category: ICate = {
            name: this.categoryForm.value.name || '',
        };
        this.categoryService.addCategory(category).subscribe((data) => {
            console.log(data);
        });

        this.router.navigate(['/admin/categories']);
    }
}
