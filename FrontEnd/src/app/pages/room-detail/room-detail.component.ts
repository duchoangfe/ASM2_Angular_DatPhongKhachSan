import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { IRoom } from '../../interfaces/Room';
@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent {
  room: IRoom = {
    name: "",
    price: 0,
    img: "",
    description: ""
  }
  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {
    // Observable
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.roomService.getRoomById(id).subscribe(room => {
        this.room = room;
      })
    })
  }
}


// import { useParams } from 'react-router-dom';

// const { id } = useParams();
