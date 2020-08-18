import { Injectable } from "@angular/core";
import { Room } from '../models/room.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private _rooms: Room[];
  private _roomsNamesSubject = new Subject<string[]>()
  roomsNames = this._roomsNamesSubject.asObservable()
  private dbUrl = environment.DB + '/rooms.json'

  constructor(private http: HttpClient) {
    // this._rooms = [
    //   {
    //     name: 'cats',
    //     users: [
    //       {
    //         userName: 'moshe',
    //         id: '01'
    //       },
    //       {
    //         userName: 'david',
    //         id: '02'
    //       },
    //       {
    //         userName: 'ronen',
    //         id: '03'
    //       },
    //       {
    //         userName: 'shir',
    //         id: '04'
    //       },
    //       {
    //         userName: 'michal',
    //         id: '05'
    //       }
    //     ]
    //   },
    //   {
    //     name: 'toys',
    //     users: [
    //       {
    //         userName: 'moshe',
    //         id: '01'
    //       },
    //       {
    //         userName: 'david',
    //         id: '02'
    //       },
    //       {
    //         userName: 'ronen',
    //         id: '03'
    //       },
    //       {
    //         userName: 'shir',
    //         id: '04'
    //       },
    //       {
    //         userName: 'michal',
    //         id: '05'
    //       }
    //     ]
    //   }
    // ]
  }

  // putRoomsInDb() {
  //   this.http.put(
  //     this.dbUrl,
  //     this._rooms
  //   ).subscribe(
  //     (res) => {
  //       console.log(res)
  //     },
  //     (err) => {
  //       console.log(err)
  //     }
  //   )
  // }

  // getRoomsNames() {
  //   return this._rooms.map(room => room.name)
  // }

  getRooms() {
    this.http.get(
      this.dbUrl
    ).subscribe(
      (res) => {
        // console.log(res)
        this._rooms = []
        for (let room in res) {
          this._rooms.push({
            name: res[room].name,
            users: res[room].users || []
          })
        }
        this._roomsNamesSubject.next(this._rooms.map(room => room.name))
      },
      (err) => {
        console.log(err)
      }
    )
  }



  getRoom(roomName) {
    return this._rooms.find(room => room.name === roomName)
  }

  createNewRoom(name) {
    // this._rooms.push({ name, users: [] })
    // this._roomsNamesSubject.next(this._rooms.map(room => room.name))
    this.http.post(
      this.dbUrl,
    )

    // 1 לשלוח את החדר החדש אל הדאטהבייס
    // 2 כאשר מקבלים ריזולט חיובי לעדכן את שמות החדרים מתול הדאטה בייס
    // 3 אחרי שהחדרים מתקבלים מתו הדאטה בייס לעבור לחדר החדש
  }

}
