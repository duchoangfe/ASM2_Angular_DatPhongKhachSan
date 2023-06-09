import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from '../../../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  users : User[] = [] 
  
  user: User = {
    userName: "",
    phone: 0,
    img: "",
    passWord: "",
    email: "",
  }

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
    private router : Router,
    private route : ActivatedRoute
    )  {
          // Observable
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      // console.log("id",id)
      this.UserService.getUserId(id).subscribe(user => {
        this.user = user;
      })
    })
    }
  
  onHandleSubmit() {
   if(this.usersFrom.invalid) return; 
   const user: User = {
    userName: this.usersFrom.value.userName || '',
    phone: this.usersFrom.value.phone || 0,
    img: this.usersFrom.value.img || '',
    passWord : this.usersFrom.value.passWord || '',
    email: this.usersFrom.value.email || ''
   };
   alert("Thêm thành công")
   this.UserService.editUser(user).subscribe(data => {
    console.log(data);
   })
   this.router.navigate(["/admin/user"])
  }
}
