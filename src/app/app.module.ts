import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DataBindingExampleComponent } from './components/data-binding-example/data-binding-example.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatRoomUsersComponent } from './components/chat-room-users/chat-room-users.component';
import { ChatRoomMainComponent } from './components/chat-room-main/chat-room-main.component';
import { ChatRoomMessageComponent } from './components/chat-room-message/chat-room-message.component';
import { ChatRoomUsersSearchComponent } from './components/chat-room-users-search/chat-room-users-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingExampleComponent,
    HeaderComponent,
    ChatRoomComponent,
    FooterComponent,
    ChatRoomUsersComponent,
    ChatRoomMainComponent,
    ChatRoomMessageComponent,
    ChatRoomUsersSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
