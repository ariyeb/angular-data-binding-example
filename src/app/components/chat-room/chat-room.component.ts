import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Message } from 'src/app/models/message.model';
import { ActivatedRoute } from '@angular/router';
import { ChatRoomService } from 'src/app/services/chat-room.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  providers: [ChatRoomService]
})
export class ChatRoomComponent implements OnInit {
  roomName: string
  // myUser: User = {
  //   userName: 'Ariye',
  //   id: '11'
  // }
  // users: User[] = [
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
  // messages: Message[] = [
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

  constructor(private route: ActivatedRoute, private chatRoomService: ChatRoomService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomName = params.get('name')
    })
  }

}
