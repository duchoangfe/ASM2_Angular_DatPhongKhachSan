import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8080/api/users`);
}
 
  removeUser( id: number) : Observable<User>{
    console.log("id",id)
    return this.http.delete<User>(`http://localhost:8080/api/users/${id}`)
  }
  inActiveAccount( id: number) : Observable<User>{
    return this.http.get<User>(`http://localhost:8080/api/users/${id}`)
  }

  getUserId(id: number): Observable<User> {
    console.log("id",id)
    return this.http.get<User>(
        `http://localhost:8080/api/users/${id}`
    );
}
}
