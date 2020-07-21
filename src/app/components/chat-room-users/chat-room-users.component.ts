import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room-users',
  templateUrl: './chat-room-users.component.html',
  styleUrls: ['./chat-room-users.component.css']
})
export class ChatRoomUsersComponent implements OnInit {
  @Input() users: User[]
  usersToDisplay: User[]

  constructor() { }

  ngOnInit(): void {
    this.usersToDisplay = [...this.users]
  }

  onUsersSearch(users: string) {
    this.usersToDisplay = this.users.filter(user => user.userName.includes(users))
  }

}
