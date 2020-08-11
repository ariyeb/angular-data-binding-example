import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RoomsComponent } from './components/rooms/rooms.component'
import { HomeComponent } from './components/home/home.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { ChatRoomComponent } from './components/chat-room/chat-room.component'
import { UserEntranceComponent } from './components/user-entrance/user-entrance.component'
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'room/:name', component: ChatRoomComponent },
  {
    path: 'user', component: UserEntranceComponent, children: [
      {path: '', component}
      { path: 'subscribe', component: SubscribeFormComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


