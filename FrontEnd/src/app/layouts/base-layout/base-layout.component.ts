import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
    name: any;
    email: any;
    hasUserInfo: any;
    router: any;
    ngOnInit() {
        this.name = localStorage.getItem('name');

        this.hasUserInfo = this.name ? true : false;
    }
    logout() {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
        setTimeout(() => {
            location.reload();
        }, 10);

        this.router.navigateByUrl('/');
    }
}
