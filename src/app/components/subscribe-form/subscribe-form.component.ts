import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Form, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {
  // inputTitle = new FormControl('Initial value')
  subscribeForm: FormGroup;
  firstName: AbstractControl
  constructor() { }

  ngOnInit(): void {
    this.subscribeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      age: new FormControl(0),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordRepeated: new FormControl(''),
      terms: new FormControl(false)
    })

    this.firstName = this.subscribeForm.get('firstName')
  }

  // onClickButtonDefault() {
  //   this.inputTitle.setValue('Default')
  // }

}
