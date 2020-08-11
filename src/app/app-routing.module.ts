import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RoomsComponent } from './components/rooms/rooms.component'
import { HomeComponent } from './components/home/home.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { ChatRoomComponent } from './components/chat-room/chat-room.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'room/:name', component: ChatRoomComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

// בתוך צ'אט רום להוסיף כותרת טופיק בהתאם לראוט פרמטר

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


