import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { ChatRoomService } from 'src/app/services/chat-room.service';

@Component({
  selector: 'app-chat-room-main',
  templateUrl: './chat-room-main.component.html',
  styleUrls: ['./chat-room-main.component.css']
})
export class ChatRoomMainComponent implements OnInit {
  // @Input() messages: Message[]
  // @Input() myUser: User
  @Input() roomName: string
  messages: Message[]
  constructor(private chatRoomService: ChatRoomService) { }

  ngOnInit(): void {
    this.chatRoomService.messagesData.subscribe((messages) => {
      this.messages = messages
    })

    // this.chatRoomService.messagesSubject.next()
    this.messages = this.chatRoomService.messages
  }

  // onNewMessage(message) {
  //   this.messages.push({
  //     user: this.myUser,
  //     message
  //   })
  // }

  onDeleteMessage(index) {
    this.messages.splice(index, 1);
  }

}
