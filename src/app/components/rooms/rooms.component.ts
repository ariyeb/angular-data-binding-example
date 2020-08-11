import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomsNames
  constructor(private router: Router, private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsNames = this.roomsService.getRoomsNames()
  }

  onClickButtonNewRoom(name) {
    // this.roomsNames.push(name)
    this.router.navigate(['/room', name])
  }

}
