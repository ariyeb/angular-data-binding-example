import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataBindingExampleComponent } from './components/data-binding-example/data-binding-example.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatRoomUsersComponent } from './components/chat-room-users/chat-room-users.component';
import { ChatRoomMainComponent } from './components/chat-room-main/chat-room-main.component';
import { ChatRoomMessageComponent } from './components/chat-room-message/chat-room-message.component';
import { ChatRoomUsersSearchComponent } from './components/chat-room-users-search/chat-room-users-search.component';
import { ChatRoomSendMessageComponent } from './components/chat-room-send-message/chat-room-send-message.component';
import { PrivateMessageComponent } from './components/private-message/private-message.component';
import { NgmodelFormComponent } from './components/ngmodel-form/ngmodel-form.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserEntranceComponent } from './components/user-entrance/user-entrance.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

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
    ChatRoomUsersSearchComponent,
    ChatRoomSendMessageComponent,
    PrivateMessageComponent,
    NgmodelFormComponent,
    SubscribeFormComponent,
    RoomsComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserEntranceComponent,
    LoginFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
