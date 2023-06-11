import { EventEmitter, Input } from '@angular/core';
import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICate } from 'src/app/interfaces/Category';
import { IRoom } from 'src/app/interfaces/Room';
import { CategoryService } from 'src/app/services/category.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent {
   
    rooms: IRoom[] = [];
    category: ICate = {
        name: '',
    };
    constructor(
        private route: ActivatedRoute,
        private categoryService: CategoryService,
        private roomService: RoomService
    ) { 
        
        this.roomService.getRooms().subscribe(
            (data: any) => {
          
                this.rooms = data.rooms.data;
            },
            (error) => console.log(error.message)
        );
    }
    removeItem(_id: any) {
        // xoa API
        this.roomService.deleteRoom(_id).subscribe(() => {
            // reRender
            if (window.confirm('bạn có chắc chắn muốn xóa?')) {
                this.rooms = this.rooms.filter((item) => item._id !== _id);
                alert('Xóa thành công');
            } else {
            }
        });
    }
}
