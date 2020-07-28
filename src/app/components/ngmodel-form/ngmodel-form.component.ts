import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel-form',
  templateUrl: './ngmodel-form.component.html',
  styleUrls: ['./ngmodel-form.component.css']
})
export class NgmodelFormComponent implements OnInit {
  userName: string = "";
  Password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form.form.value)
    console.log("username: ", this.userName, "password:", this.Password)
  }

}
