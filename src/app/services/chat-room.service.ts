import { Injectable } from "@angular/core";
import { User } from '../models/user.model';
import { Message } from '../models/message.model';
import { Subject } from 'rxjs';
import { Room } from '../models/room.model';
import { RoomsService } from './rooms.service';

@Injectable()
export class ChatRoomService {
  private _myUser: User = {
    userName: 'Ariye',
    id: '11'
  }
  private _room: Room

  // private _users: User[] = [
  //   {
  //     userName: 'moshe',
  //     id: '01'
  //   },
  //   {
  //     userName: 'david',
  //     id: '02'
  //   },
  //   {
  //     userName: 'ronen',
  //     id: '03'
  //   },
  //   {
  //     userName: 'shir',
  //     id: '04'
  //   },
  //   {
  //     userName: 'michal',
  //     id: '05'
  //   }
  // ]
  // private _messages: Message[] = [
  //   {
  //     user: {
  //       userName: 'ronen',
  //       id: '03'
  //     },
  //     message: 'Hi'
  //   },
  //   {
  //     user: this.myUser,
  //     message: 'How are you?'
  //   }
  // ]
  private _messages: Message[] = []
  private _messagesSubject = new Subject<Message[]>()
  messagesData = this._messagesSubject.asObservable()

  constructor(private roomsService: RoomsService) {

  }

  get myUser() {
    return { ...this._myUser }
  }

  get messages() {
    return [...this._messages]
  }

  // get users() {
  //   return [...this._users]
  // }
  getUsers() {
    return [...this._room.users] || []
  }

  initRoom(roomName) {
    this._room = this.roomsService.getRoom(roomName)
  }

  addMessage(message: string) {
    this._messages.push({
      user: { ...this._myUser },
      message
    })

    this._messagesSubject.next([...this._messages])
  }

  deleteMessage(index: number) {
    this._messages.splice(index, 1)
    console.log(index)
    this._messagesSubject.next([...this._messages])
  }

 
}

