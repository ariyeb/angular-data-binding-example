import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { ChatRoomService } from 'src/app/services/chat-room.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-room-main',
  templateUrl: './chat-room-main.component.html',
  styleUrls: ['./chat-room-main.component.css']
})
export class ChatRoomMainComponent implements OnInit, OnDestroy {
  // @Input() messages: Message[]
  // @Input() myUser: User
  @Input() roomName: string
  messages: Message[]
  messagesSub: Subscription
  constructor(private chatRoomService: ChatRoomService) { }

  ngOnInit(): void {
    this.messagesSub= this.chatRoomService.messagesData.subscribe((messages) => {
      this.messages = messages
    })

    // this.chatRoomService.messagesSubject.next()
    this.messages = this.chatRoomService.messages
  }

  ngOnDestroy(){
    this.messagesSub.unsubscribe()
  }

  // onNewMessage(message) {
  //   this.messages.push({
  //     user: this.myUser,
  //     message
  //   })
  // }

  // onDeleteMessage(index) {
  //   this.messages.splice(index, 1);
  // }

}
