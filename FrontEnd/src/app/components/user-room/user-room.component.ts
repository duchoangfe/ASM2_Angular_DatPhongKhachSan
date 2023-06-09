import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';
@Component({
    selector: 'app-user-room',
    templateUrl: './user-room.component.html',
    styleUrls: ['./user-room.component.scss'],
})
export class UserRoomComponent {
    isLoggedIn: boolean = false;
    _id: any;
    name: any;
    email: any;
    hasUserInfo: any;
    rooms: IRoom[] = [];
    constructor(private roomService: RoomService) {
        this.roomService.getRooms().subscribe(
            (data: any) => {
                console.log(data.rooms.data);

                this.rooms = data.rooms.data;
            },
            (error) => console.log(error.message)
        );
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');

        this.hasUserInfo = this.name ? true : false;
    }
}
