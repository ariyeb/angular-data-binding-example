import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  email: string
  password: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.signin(this.username, this.email, this.password)

    // this.router.navigate(['/rooms'])
  }

}
