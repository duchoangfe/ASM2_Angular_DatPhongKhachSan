import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ICate } from 'src/app/interfaces/Category';

@Component({
    selector: 'app-room-edit',
    templateUrl: './room-edit.component.html',
    styleUrls: ['./room-edit.component.scss'],
})
export class RoomEditComponent {
    categories: ICate[] = [];

    ngOnInit() {
        this.categoryService.getCategory().subscribe((data: any) => {
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

    room: IRoom = {
        name: '',
        price: 0,
        img: '',
        description: '',
        categoryId: '',
    };

    roomForm = this.formBuilder.group({
        name: [''],
        price: [0],
        img: [''],
        description: [''],
        categoryId: [''],
    });

    constructor(
        private roomService: RoomService,
        private route: ActivatedRoute,
        private router: Router,
        private categoryService: CategoryService,
        private formBuilder: FormBuilder
    ) {
        console.log(this.roomForm);
        // Observable
        this.route.paramMap.subscribe((param) => {
            const _id = param.get('id');
            console.log(_id);

            this.roomService.getRoomById(_id as any).subscribe((data: any) => {
                this.room = data.room;
            });
        });
    }
    onHandleSubmit() {
        console.log(this.roomForm.value);

        if (this.roomForm.invalid) return;

        const room: IRoom = {
            _id: this.room._id,
            name: this.roomForm.value.name || '',
            price: this.roomForm.value.price || 0,
            img: this.roomForm.value.img || '',
            description: this.roomForm.value.description || '',
            categoryId: this.roomForm.value.categoryId || '',
        };
        console.log(room);

        this.roomService.updateRoom(room).subscribe((data) => {
            console.log(data);
        });
        setTimeout(() => {
            location.reload();
        }, 10);
        this.router.navigate(['admin/room']);
    }
}
