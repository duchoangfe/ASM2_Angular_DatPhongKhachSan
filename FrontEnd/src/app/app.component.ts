import { Component } from '@angular/core';
import { IRoom } from './interfaces/Room';

@Component({
    selector: 'app-root', // định nghĩa element
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    rooms: IRoom[] = [];
}
