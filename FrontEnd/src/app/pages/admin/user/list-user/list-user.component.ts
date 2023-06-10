import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  users: User[] = [];
  title = "Quản Lý User";



  constructor(
    private user: UserService,
    private route: ActivatedRoute
  ) {
    this.user.getUser().subscribe((data: any) => {
      this.users = data.users;
      // console.log("user",  this.users)
    },
      (error) => console.log(error.message)
    );
  }

  removeUser(_id: any) {
    this.user.removeUser(_id).subscribe(() => {
      console.log("Ban Xoa Thanh Cong")
      this.users = this.users.filter(item => item._id != _id)
    })
  }

  unAcout(_id: any) {
    this.user.inActiveAccount(_id).subscribe(() => {
      this.user.getUser().subscribe((data: any) => {
        this.users = data.users;
        // console.log("user",  this.users)
      },
        (error) => console.log(error.message)
      );
    })

  }

}
