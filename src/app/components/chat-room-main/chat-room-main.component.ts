import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat-room-main',
  templateUrl: './chat-room-main.component.html',
  styleUrls: ['./chat-room-main.component.css']
})
export class ChatRoomMainComponent implements OnInit {
  @Input() messages: Message[]
  constructor() { }

  ngOnInit(): void {
  }

}
