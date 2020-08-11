import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomsNames = [
    "cats",
    "toys"
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickButtonNewRoom(name) {
    // this.roomsNames.push(name)
    this.router.navigate(['/room', name])
  }

}
