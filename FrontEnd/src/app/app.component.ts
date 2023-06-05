import { Component } from '@angular/core';
import { IRoom } from './interfaces/Room';

@Component({
    selector: 'app-root', // định nghĩa element
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    rooms: IRoom[] = [
        // { id: 1, name: "Sản phẩm A", price: 200, img: "Ảnh" },
        // { id: 2, name: "Sản phẩm B", price: 300, img: "Ảnh" }
    ]
    // onHandleRemove(id: any) {
    //     this.rooms = this.rooms.filter(item => item.id !== id);
    // }
}
