import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserModule} from "../../user.module";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:UserModule;

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => value)
  }

  ngOnInit(): void {
  }

}
