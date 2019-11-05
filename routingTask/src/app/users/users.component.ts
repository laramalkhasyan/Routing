import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[
    {
    id:1,
    name:"Francisco",
    surname:"Chang"
  },
  {
    id:2,
    name:"Helen",
    surname:"Bennett"
  },
  {
    id:3,
    name:"Giovanni",
    surname:"Rovelli"
  },
  {
    id:4,
    name:"Maria",
    surname:"Anders"
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
