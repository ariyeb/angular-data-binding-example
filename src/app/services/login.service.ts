import { Injectable } from "@angular/core";
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiResult } from '../models/apiResult.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _myUser: User | null
  private _token: string

  constructor(private http: HttpClient, private router: Router) { }

  get myUser() {
    return this._myUser
  }

  private setMyUser(userName: string, id: string) {
    this._myUser = { userName, id }
  }

  get token() {
    return this._token
  }

  signup(userName: string, email: string, password: string) {
    this.http.post<ApiResult>(
      environment.FIREBASE_SIGNUP,
      { email, password, returnSecureToken: true }
    ).subscribe(
      (res) => {
        this._token = res.idToken
        this.setMyUser(userName, res.localId)
        this.router.navigate(['/rooms'])
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
