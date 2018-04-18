import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { CollectionService } from '../collection.service';
import { User } from '../models/Collection';


@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
users$: Observable<User[]>
fields: User;
  constructor(private collectionService:CollectionService) { }

  ngOnInit() {
   this.getUsers()
  }
  getUsers(){
    this.users$ = this.collectionService.getUsers()
    this.fields = undefined;
  }
select(user:User) {
  this.fields = user
}
}
