import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatRoomService } from 'src/app/services/chat-room.service';

@Component({
  selector: 'app-chat-room-send-message',
  templateUrl: './chat-room-send-message.component.html',
  styleUrls: ['./chat-room-send-message.component.css']
})
export class ChatRoomSendMessageComponent implements OnInit {
  // @Output() newMessage = new EventEmitter<string>()

  constructor(private chatRoomService: ChatRoomService) { }

  ngOnInit(): void {
  }

  sendMessage(input) {
    // this.newMessage.emit(input.value)
    this.chatRoomService.addMessage(input.value)
    input.value = ""
  }

}
