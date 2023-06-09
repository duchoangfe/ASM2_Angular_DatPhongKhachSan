import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRoom } from '../interfaces/Room';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class RoomService {
    constructor(private http: HttpClient) {}

    getRooms(): Observable<IRoom[]> {
        return this.http.get<IRoom[]>(`http://localhost:8080/api/rooms`);
    }
    getRoomById(_id: any): Observable<any> {
        return this.http.get<any>(`http://localhost:8080/api/rooms/${_id}`);
    }
    addRoom(room: IRoom): Observable<IRoom> {
        return this.http.post<IRoom>(`http://localhost:8080/api/rooms`, room);
    }
    updateRoom(room: IRoom): Observable<IRoom> {
        return this.http.put<IRoom>(
            `http://localhost:8080/api/rooms/${room._id}`,
            room
        );
    }
    deleteRoom(_id: number): Observable<IRoom> {
        return this.http.delete<IRoom>(
            `http://localhost:8080/api/rooms/${_id}`
        );
    }
}
