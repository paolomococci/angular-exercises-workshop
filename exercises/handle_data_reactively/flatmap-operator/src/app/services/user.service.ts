import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { User } from '../interfaces/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersApiUrl: string = ''
  commentsJsonUrl: string = ''

  constructor(
    private http: HttpClient
  ) { }
}
