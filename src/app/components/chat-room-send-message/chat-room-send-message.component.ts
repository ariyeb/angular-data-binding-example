import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-room-send-message',
  templateUrl: './chat-room-send-message.component.html',
  styleUrls: ['./chat-room-send-message.component.css']
})
export class ChatRoomSendMessageComponent implements OnInit {
  @Output() newMessage = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(input) {
    this.newMessage.emit(input.value)
    input.value = ""
  }

}
