import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
 listUser : User[] = []
 constructor (private userVice: UserService){
   this.userVice.getUser().subscribe(data => {
    this.listUser = data;
   },error => console.log(error))
 }
 

 removeUser(id: any) {
  this.userVice.removeUser(id).subscribe(() => {
  // console.log('id' ,_id)
    console.log('Ban da xoa thanh cong')
    this.listUser = this.listUser.filter(item => item.id != id)
  })  
}
}
