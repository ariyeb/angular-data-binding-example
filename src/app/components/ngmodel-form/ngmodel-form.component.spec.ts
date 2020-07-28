import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelFormComponent } from './ngmodel-form.component';

describe('NgmodelFormComponent', () => {
  let component: NgmodelFormComponent;
  let fixture: ComponentFixture<NgmodelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmodelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
