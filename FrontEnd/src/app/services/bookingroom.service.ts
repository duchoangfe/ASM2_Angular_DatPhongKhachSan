import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookingRoom } from '../interfaces/bookingroom';


@Injectable({
    providedIn: 'root',
})
export class BookingroomService {
    constructor(private http: HttpClient) {}

    BookigRoom(data: any) {
        return this.http.post('http://localhost:8080/api/bookingroom', data);
    }
    getBookingRoomByid(email: string): Observable<bookingRoom> {
        return this.http.get<bookingRoom>(
            `http://localhost:8080/api/bookingroom/${email}`
        );
    }
    deleteBokingroom(id: number): Observable<bookingRoom> {
        return this.http.delete<bookingRoom>(
            `http://localhost:8080/api/bookingroom/${id}`
        );
    }
}
