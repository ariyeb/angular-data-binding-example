import { Injectable } from "@angular/core";
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private _rooms: Room[]

  constructor() {
    this._rooms = [
      {
        name: 'cats',
        users: [
          {
            userName: 'moshe',
            id: '01'
          },
          {
            userName: 'david',
            id: '02'
          },
          {
            userName: 'ronen',
            id: '03'
          },
          {
            userName: 'shir',
            id: '04'
          },
          {
            userName: 'michal',
            id: '05'
          }
        ]
      },
      {
        name: 'toys',
        users: [
          {
            userName: 'moshe',
            id: '01'
          },
          {
            userName: 'david',
            id: '02'
          },
          {
            userName: 'ronen',
            id: '03'
          },
          {
            userName: 'shir',
            id: '04'
          },
          {
            userName: 'michal',
            id: '05'
          }
        ]
      }
    ]
  }

  getRoomsNames() {
    return this._rooms.map(room => room.name)
  }

  getRoom(roomName) {
    return this._rooms.find(room => room.name === roomName)
  }

}
