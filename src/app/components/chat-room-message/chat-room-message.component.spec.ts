import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomMessageComponent } from './chat-room-message.component';

describe('ChatRoomMessageComponent', () => {
  let component: ChatRoomMessageComponent;
  let fixture: ComponentFixture<ChatRoomMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
