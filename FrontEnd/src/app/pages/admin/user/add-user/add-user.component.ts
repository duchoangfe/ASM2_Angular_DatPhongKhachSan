import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from '../../../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  // selectedValue: string = ''; 

  users : User[] = []
  
  usersFrom = this.formBuilder.group({
    userName : ['',[Validators.required,Validators.minLength(10)]] ,
    phone: [null,[Validators.required,Validators.minLength(7)]],
    email: ['',[Validators.required,Validators.minLength(10)]],
    passWord: ['',[Validators.required]],
    img: [''],

  });
  constructor (
    private formBuilder : FormBuilder,
    private UserService : UserService,
    private router : Router
    )  {}
  
  onHandleSubmit() {
   if(this.usersFrom.invalid) return; 
   const room: User = {
    userName: this.usersFrom.value.userName || '',
    phone: this.usersFrom.value.phone || 0,
    img: this.usersFrom.value.img || '',
    passWord : this.usersFrom.value.passWord || '',
    email: this.usersFrom.value.email || ''
   };
   alert("Thêm thành công")
   this.UserService.addUser(room).subscribe(data => {
    console.log(data);
   })
   this.router.navigate(["/admin/room"])
  }
}
