import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';
@Component({
    selector: 'app-booking-room',
    templateUrl: './booking-room.component.html',
    styleUrls: ['./booking-room.component.scss'],
})
export class BookingRoomComponent {
    isLoggedIn: boolean = false;
    _id: any;
    name: any;
    email: any;
    hasUserInfo: any;
    rooms: IRoom[] = [];
    constructor(private roomService: RoomService) {
        this.roomService.getRoomById(this._id).subscribe(
            (data: any) => {
                console.log(data._id);
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
