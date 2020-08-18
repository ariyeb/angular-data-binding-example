import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {
  roomsNames = []
  roomsNamesSub: Subscription
  constructor(private router: Router, private roomsService: RoomsService) { }

  ngOnInit(): void {
    // this.roomsNames = this.roomsService.getRoomsNames()
    this.roomsNamesSub = this.roomsService.roomsNames.subscribe(roomsNames => {
      this.roomsNames = roomsNames
    })
    this.roomsService.getRooms()
    // this.roomsService.putRoomsInDb()
  }

  ngOnDestroy() {
    this.roomsNamesSub.unsubscribe()
  }

  onClickButtonNewRoom(name) {
    // this.roomsNames.push(name)
    this.roomsService.createNewRoom(name)
    // this.router.navigate(['/room', name])
  }

}
