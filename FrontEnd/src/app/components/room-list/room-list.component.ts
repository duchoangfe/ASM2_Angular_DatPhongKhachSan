import { EventEmitter, Input } from '@angular/core';
import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICate } from 'src/app/interfaces/Category';
import { IRoom } from 'src/app/interfaces/Room';
import { CategoryService } from 'src/app/services/category.service';
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
  category: ICate = {
    name: ""
  }
  constructor(
    private route : ActivatedRoute,
    private categoryService: CategoryService,
    private roomService: RoomService) {
    this.roomService.getRooms().subscribe((data: any) => {
      console.log(data.rooms.data);
      
      this.rooms = data.rooms.data;
    }, error => console.log(error.message))

    this.route.paramMap.subscribe(param => {
      const _id = Number(param.get('_id'));
      this.categoryService.getCategoryById(_id).subscribe(category => {
        this.category = category;
      })
    })
  }
  removeItem(_id: any) {
    // xoa API
    this.roomService.deleteRoom(_id).subscribe(() => {
      // reRender
      if(window.confirm('bạn có chắc chắn muốn xóa?')){
        this.rooms = this.rooms.filter(item => item._id !== _id);
        alert("Xóa thành công")
      }else{

      }
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