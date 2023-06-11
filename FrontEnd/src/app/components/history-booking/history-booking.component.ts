import { Component } from '@angular/core';
import { bookingRoom } from 'src/app/interfaces/bookingroom';
import { ActivatedRoute } from '@angular/router';
import { BookingroomService } from 'src/app/services/bookingroom.service';
import { RoomService } from 'src/app/services/room.service';
import { IRoom } from 'src/app/interfaces/Room';

@Component({
    selector: 'app-history-booking',
    templateUrl: './history-booking.component.html',
    styleUrls: ['./history-booking.component.scss'],
})
export class HistoryBookingComponent {
    history: bookingRoom[] = [];
    rooms: IRoom[] = [];
    email: any;
    constructor(
        private bookingRoom: BookingroomService,
        private room: RoomService
    ) {
        this.email = localStorage.getItem('email');
        console.log('email', this.email);
        this.bookingRoom
            .getBookingRoomByid(this.email)
            .subscribe((data: any) => {
                this.history = data;
                console.log('data', data);
                // console.log("Id", data[0]?.roomId)

                // this.room.getRoomById(data[0]?.roomId).subscribe(
                //   (data2: any) => {
                //     this.history = data2;
                //   },
                // )
            });
    }
}
