import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { COLLECTION, User } from './models/Collection'

@Injectable()
export class CollectionService {

  constructor() { }

  getUsers(): Observable<User[]>{
    return of(COLLECTION)

  }
  updateUser(user:User){
   return (console.log(user))

  }

}
