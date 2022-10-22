import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  Observable,
  map
}  from 'rxjs'

import { User } from '../interfaces/user.model'

@Injectable({
  providedIn: 'root',
})
export class UserService {

  usersApiUrl: string = ''
  commentsJsonUrl: string = ''

  constructor(
    private http: HttpClient
  ) {}

  getUser(userId: string): Observable<User | undefined> {
    return this.http.get<{
      results: User[]
    }>(
      this.usersApiUrl
    ).pipe(
      map((response) =>
        response.results.find(
          (user) => {
            return user.login.uuid === userId
          }
        )
      )
    )
  }

  getSimilarUsers(userId: string): Observable<User[]> {
    return this.http.get<{
      results: User[]
    }>(
      this.usersApiUrl
    ).pipe(
      map(
        (response) => response.results.filter(
          user => user.login.uuid !== userId
        )
      )
    )
  }

  getDataComments(): Observable<string> {
    return this.http.get<{
      __comments: string
    }>(this.commentsJsonUrl).pipe(
      map((response) => response.__comments)
    )
  }
}
