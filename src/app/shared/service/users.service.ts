import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';
import { ActiveUser } from 'shared/models/active-user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  ActiveUser!: ActiveUser
  ActiveUser$: Observable<any> = of()
  constructor(private database: AngularFireDatabase, private authService: AuthService) { }


  getUser(uid: string) {
    return this.database.object('users/' + uid).valueChanges()
  }

  addUser(user: ActiveUser) {
    this.database.object('users/' + user.uid).update(user)
  }

  async checkEmailExist(id: string, notExsit = () => { }, Exsit = () => { }) {
    let Email = (await this.database.object('users/' + id).query.get()).val()
    if (!Email)
      return notExsit()

    Exsit()
  }

}

