import { EventEmitter, Input } from '@angular/core';
import { Component, Output } from '@angular/core';
import { IRoom } from 'src/app/interfaces/Room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {


  // @Input() products: IProduct[] = [];
  // @Output() onRemove = new EventEmitter<number>();
  rooms: IRoom[] = [];
  constructor(private roomService: RoomService) {
    this.roomService.getRooms().subscribe((data: any) => {
      console.log(data.rooms.data);
      
      this.rooms = data.rooms.data;
    }, error => console.log(error.message))
  }
  removeItem(_id: any) {
    // xoa API
    this.roomService.deleteRoom(_id).subscribe(() => {
      // reRender
      this.rooms = this.rooms.filter(item => item._id !== _id)
    })
    // this.onRemove.emit(id);
  }
}


// ProductList.js

// function ProductList({ products, onRemove }){
//   return <div>
//     <button onClick={() => onRemove(id)}></button>
//   </div>
// }

// App.js
// <ProductList products={state} onRemove={onHandleRemove}/>





// function ProductList({products, onRemove}){
//   return (
//     <div>
//       {products.map(item => {
//         return <button onClick={() => onRemove(item.id)}></button>
//       })}
//     </div>
//   )
// }

// <product-list onRemove={handleRemove}/>