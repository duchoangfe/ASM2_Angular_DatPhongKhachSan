import { Component } from '@angular/core';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss']
})
export class RoomAddComponent {
  room: IRoom = {
    name: "",
    price: 0,
    img: "",
    description: ""
  }
  constructor(private roomService: RoomService) {

  }
  onHandleSubmit() {
    this.roomService.addRoom(this.room).subscribe(data => {
      console.log(data)
    })
  }
}
