import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  users: User[] = [];


  constructor(private user: UserService) {
    this.user.getUser().subscribe((data : any) => {
            this.users = data.users;
            console.log("user",  this.users)
        },
        (error) => console.log(error.message)
    );
}
  
  removeUser(id : any){
    this.user.removeUser(id).subscribe(() =>{
      console.log("Ban Xoa Thanh Cong")
      this.users = this.users.filter(item => item.id != id)
    })
  }

}
