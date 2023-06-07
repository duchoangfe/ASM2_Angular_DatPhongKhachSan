import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }
  getUser() : Observable<User[]>{
    return this.http.get<User[]>(`https://6470e98e3de51400f7251ab9.mockapi.io/users`)
  }
  addUser( user : User) : Observable<User>{
    return this.http.post<User>(`https://6470e98e3de51400f7251ab9.mockapi.io/users`,user)
  }
  editUser( user: User) : Observable<User>{
    return this.http.put<User>(`https://6470e98e3de51400f7251ab9.mockapi.io/users/${user._id}`,user)
  }
  getUserId( _id: number) : Observable<User>{
    return this.http.get<User>(`https://6470e98e3de51400f7251ab9.mockapi.io/users/${_id}`)
  }
  removeUser( _id: number) : Observable<User>{
    return this.http.delete<any>(`https://6470e98e3de51400f7251ab9.mockapi.io/users/${_id}`)
  }
}
