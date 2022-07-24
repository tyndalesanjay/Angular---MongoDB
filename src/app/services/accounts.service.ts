import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseUrl = 'http://localhost:4000/api/account'

  constructor(private http: HttpClient) { }

  createAccount(data: AccountInterface): Observable<any> {
    return this.http.post(this.baseUrl + "/create", data)
  }

}
export interface AccountInterface {
  studentID: "",
  account: "",
  bank: "",
  branch: "",
  accountType: "",
  status: ""
}
