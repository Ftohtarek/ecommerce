import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable, of } from 'rxjs';
import { ActiveUser } from 'shared/models/active-user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  ActiveUser!: ActiveUser
  ActiveUser$: Observable<any> = of()
  constructor(private database: AngularFireDatabase) { }


  getUser(uid: string) {
    return this.database.object('users/' + uid).valueChanges()
  }

  addUser(id: any, email: string, userName: string, uid: string, photoURL?: string) {
    this.database.object('users/' + id).update({ email: email, userName: userName, photoURL: photoURL, uid: uid })
  }

  checkEmailExist(id: string) {
    
    return this.getUser(id).pipe(map(user => user ? true : false))
  }
  
}
