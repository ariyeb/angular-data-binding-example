import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomSendMessageComponent } from './chat-room-send-message.component';

describe('ChatRoomSendMessageComponent', () => {
  let component: ChatRoomSendMessageComponent;
  let fixture: ComponentFixture<ChatRoomSendMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomSendMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
