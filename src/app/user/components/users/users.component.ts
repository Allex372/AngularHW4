import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {UserModule} from "../../user.module";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users:UserModule[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(value => this.users=value)
  }

}
