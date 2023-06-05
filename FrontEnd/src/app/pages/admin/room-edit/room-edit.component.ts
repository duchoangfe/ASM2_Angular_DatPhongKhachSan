import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent {
  room: IRoom = {
    name: "",
    price: 0,
    img: "",
    description: ""
  }
  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute) {

    // Observable
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.roomService.getRoomById(id).subscribe(room => {
        this.room = room;
      })
    })
  }
  onHandleSubmit() {
    this.roomService.updateRoom(this.room).subscribe(data => {
      console.log(data)
    })
  }
}
