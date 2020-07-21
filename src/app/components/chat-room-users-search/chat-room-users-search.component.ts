import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-room-users-search',
  templateUrl: './chat-room-users-search.component.html',
  styleUrls: ['./chat-room-users-search.component.css']
})
export class ChatRoomUsersSearchComponent implements OnInit {
  @Output() users_to_display = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onInput(event) {
    this.users_to_display.emit(event.target.value)
  }

}
