import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomUsersSearchComponent } from './chat-room-users-search.component';

describe('ChatRoomUsersSearchComponent', () => {
  let component: ChatRoomUsersSearchComponent;
  let fixture: ComponentFixture<ChatRoomUsersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomUsersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomUsersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
