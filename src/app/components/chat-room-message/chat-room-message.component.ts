import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { ChatRoomService } from 'src/app/services/chat-room.service';

@Component({
  selector: 'app-chat-room-message',
  templateUrl: './chat-room-message.component.html',
  styleUrls: ['./chat-room-message.component.css']
})
export class ChatRoomMessageComponent implements OnInit {
  @Input() message: Message;
  // @Input() myUserId: string;
  // @Output() delete = new EventEmitter()
  @Input() index: number
  isMyMessage: boolean
  messageClass = ""
  myUserId: string
  constructor(private chatRoomService: ChatRoomService) { }

  ngOnInit(): void {
    this.myUserId = this.chatRoomService.myUser.id
    this.isMyMessage = this.myUserId === this.message.user.id
    if (this.isMyMessage) {
      this.messageClass = 'my-message'
    }
  }

  onClickDelete() {
    // this.delete.emit()
    this.chatRoomService.deleteMessage(this.index)
  }

}
