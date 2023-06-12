import { Component } from '@angular/core';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICate } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-room-add',
    templateUrl: './room-add.component.html',
    styleUrls: ['./room-add.component.scss'],
})
export class RoomAddComponent {
    categories: ICate[] = [];

    ngOnInit() {
        this.cateService.getCategory().subscribe((data: any) => {
            console.log(data.categories);
            this.categories = data.categories;
        });
    }

    get selectedCategory(): ICate {
        return (
            this.categories.find((cate) => cate._id === this.selectedValue) || {
                _id: '',
                name: '',
            }
        );
    }

    selectedValue: string = '';
    roomForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: [0],
        img: [''],
        description: [''],
        categoryId: [''],
    });

    constructor(
        private roomService: RoomService,
        private formBuilder: FormBuilder,
        private router: Router,
        private cateService: CategoryService
    ) {}
    onHandleSubmit() {
        if (this.roomForm.invalid) return;

        const room: IRoom = {
            name: this.roomForm.value.name || '',
            price: this.roomForm.value.price || 0,
            img: this.roomForm.value.img || '',
            description: this.roomForm.value.description || '',
            categoryId: (this.selectedCategory._id || '').toString(),
        };
        alert('Thêm thành công');
        setTimeout(() => {
            location.reload();
        }, 10);
        this.roomService.addRoom(room).subscribe((data) => {
            console.log(data);
        });
        this.router.navigate(['/admin/room']);
    }
}
