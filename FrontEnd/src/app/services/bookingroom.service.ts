import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BookingroomService {
    constructor(private http: HttpClient) {}

    BookigRoom(data: any) {
        return this.http.post('http://localhost:8080/api/bookingroom', data);
    }
}
