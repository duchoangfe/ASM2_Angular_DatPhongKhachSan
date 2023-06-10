import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';

@Component({
    selector: 'app-booking-room',
    templateUrl: './booking-room.component.html',
    styleUrls: ['./booking-room.component.scss'],
})
export class BookingRoomComponent implements OnInit {
    isLoggedIn: boolean = false;
    _id: any;
    name: any;
    email: any;
    hasUserInfo: any;
    rooms: IRoom[] = [];

    constructor(
        private roomService: RoomService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        this.hasUserInfo = this.name ? true : false;

        this.route.paramMap.subscribe((param) => {
            const _id = param.get('id');
            console.log(_id);

            this.roomService.getRoomById(_id as any).subscribe((data: any) => {
                this.rooms = [data.room];
            });
        });
    }
}
