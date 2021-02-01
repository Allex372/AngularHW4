import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModule} from "../../user.module";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser():Observable<UserModule[]>{
    return this.httpClient.get<UserModule[]>('https://jsonplaceholder.typicode.com/users')
  }

}
