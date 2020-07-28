import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat-room-message',
  templateUrl: './chat-room-message.component.html',
  styleUrls: ['./chat-room-message.component.css']
})
export class ChatRoomMessageComponent implements OnInit {
  @Input() message: Message;
  @Input() myUserId: string;
  @Output() delete = new EventEmitter()
  isMyMessage: boolean
  messageClass = ""
  constructor() { }

  ngOnInit(): void {
    this.isMyMessage = this.myUserId === this.message.user.id
    if (this.isMyMessage) {
      this.messageClass = 'my-message'
    }
  }

  onClickDelete() {
    this.delete.emit()
  }

}
