import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
    userData: any;
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            this.userData = JSON.parse(storedData);
        }
    }

    formSignin = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    });

    onHandleSubmit() {
        if (this.formSignin.valid) {
            alert('Đăng Nhập Thành Công !');
            this.authService
                .signin(this.formSignin.value)
                .subscribe((data: any) => {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('role', data.user.role);
                    localStorage.setItem('name', data.user.name);
                    localStorage.setItem('email', data.user.email);

                    this.router.navigateByUrl('/');
                });
        }
    }
}
