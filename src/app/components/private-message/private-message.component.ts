import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-private-message',
  templateUrl: './private-message.component.html',
  styleUrls: ['./private-message.component.css']
})
export class PrivateMessageComponent implements OnInit {
  @Input() user: User
  @Output() sendMessage = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClickButtonSend() {
    this.sendMessage.emit()
  }



}
