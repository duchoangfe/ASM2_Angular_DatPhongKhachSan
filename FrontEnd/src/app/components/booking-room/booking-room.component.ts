import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';
import { BookingroomService } from './../../services/bookingroom.service';

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
    checkInDate: any;
    checkOutDate: any;
    numberOfGuests: any;

    constructor(
        private roomService: RoomService,
        private route: ActivatedRoute,
        private bookingService: BookingroomService
    ) {}

    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        this.hasUserInfo = this.name ? true : false;

        this.route.paramMap.subscribe((param) => {
            const _id = param.get('id');

            this.roomService.getRoomById(_id as any).subscribe((data: any) => {
                this.rooms = [data.room];
            });
        });
    }

    bookRoom() {
        const nameValue =
            document.querySelector('.text-black')?.textContent || '';
        const emailValue =
            document.querySelector('.text-black')?.textContent || '';
        const checkInValue =
            (
                document.querySelector(
                    'input[type=datetime-local]'
                ) as HTMLInputElement
            )?.value || '';
        const checkOutValue =
            (
                document.querySelector(
                    'input[type=datetime-local]'
                ) as HTMLInputElement
            )?.value || '';
        const numberOfGuestsValue =
            (document.querySelector('input[type=number]') as HTMLInputElement)
                ?.value || '';

        this.name = nameValue.trim();
        this.email = emailValue.trim();
        this.checkInDate = new Date(checkInValue);
        this.checkOutDate = new Date(checkOutValue);
        this.numberOfGuests = parseInt(numberOfGuestsValue, 10) || 0;
        const bookingData = {
            name: this.name,
            email: this.email,
            checkInDate: this.checkInDate,
            checkOutDate: this.checkOutDate,
            numberOfGuests: this.numberOfGuests,
            roomId: this.rooms[0]._id,
        };

        console.log('Tên:', this.name);
        console.log('Email:', this.email);
        console.log('Thời gian nhận phòng:', this.checkInDate);
        console.log('Thời gian trả phòng:', this.checkOutDate);
        console.log('Số người:', this.numberOfGuests);
        console.log('Thông tin phòng:', this.rooms);
        this.bookingService.BookigRoom(bookingData).subscribe(
            (response) => {
                console.log('Đặt phòng thành công:', response);
                alert('Đặt Phòng Thành Công !');
            },
            (error) => {
                console.error('Lỗi khi đặt phòng:', error);
            }
        );
    }
}
