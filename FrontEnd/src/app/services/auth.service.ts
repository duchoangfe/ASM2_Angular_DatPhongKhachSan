import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}
    signup(user: any) {
        return this.http.post('http://localhost:8080/api/signup', user).pipe(
            catchError((error) => {
                if (error.status === 400) {
                    alert('Email đã tồn tại');
                }
                return throwError(error);
            })
        );
    }

    signin(user: any) {
        return this.http.post('http://localhost:8080/api/signin', user).pipe(
            catchError((error) => {
                if (error.status === 400) {
                    alert('Tài Khoản không tồn tại');
                } else if (error.status === 401) {
                    alert('Sai Mật Khẩu');
                }
                return throwError(error);
            })
        );
    }
}
