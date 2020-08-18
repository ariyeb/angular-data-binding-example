import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isuserLogged: boolean
  isUserLoggedSub: Subscription
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.isuserLogged = !!this.loginService.myUser
    this.isUserLoggedSub = this.loginService.isUseLogged.subscribe(isUserLogged => {
      this.isuserLogged = isUserLogged
    })
  }

  ngOnDestroy() {
    this.isUserLoggedSub.unsubscribe()
  }

  onClickLogout() {
    this.loginService.logout()
  }

}
