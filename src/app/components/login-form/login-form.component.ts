import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  username: string;
  email: string
  password: string;
  unAuthMessage: string = ""
  unAuthMessageSub: Subscription
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.unAuthMessageSub = this.loginService.unAuthMessage.subscribe(message => {
      this.unAuthMessage = message
    })
  }

  ngOnDestroy() {
    this.unAuthMessageSub.unsubscribe()
    this.loginService.sendUnAuthMessage('')
  }

  onSubmit() {
    this.loginService.signin(this.username, this.email, this.password)

    // this.router.navigate(['/rooms'])
  }

}
