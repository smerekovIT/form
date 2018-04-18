import { Component, OnChanges, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { User, Friends, Hobies } from '../models/Collection';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnChanges {
  //   В html создает новые формы но не проставляет индекс 
  // 
@Input() data: User
userForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private collectionService: CollectionService
  ) {
    this.createForm()
   }

   rebuildForm(){
    this.userForm.reset({
      name: this.data.name

    })
    this.setFriends(this.data.friends)
  }

   ngOnChanges() {
    console.log(this.data)
    this.rebuildForm()
    
 }
   createForm () {
     this.userForm = this.fb.group({
       name: '',
       myFriends: this.fb.array([])
       })
    }

    
    setFriends(friends: Friends[]) {
      const friendsFGs = friends.map(friends => this.fb.group({
      
                firstName: friends.firstName,
                lastName: friends.lastName,
                narrative: friends.narrative,
          friendHobies: this.fb.array([this.fb.group({
            name: friends.hobies[0].name,
            narrative: friends.hobies[0].narrative
          })
                
                 
          ])
       })
      );
      const friendsFormArray = this.fb.array(friendsFGs);
      
      this.userForm.setControl('myFriends', friendsFormArray);
    }
   
    get myFriends(): FormArray {
      //console.log(this.userForm.get('myFriends.'))
      return this.userForm.get('myFriends') as FormArray;
    };

    addFriend() {
      //console.log(this.myFriends)
      this.myFriends.push(this.fb.group(new Friends()));
    }

    onSubmit() {
      this.data = this.prepareSaveUser()
      this.collectionService.updateUser(this.data)
      this.rebuildForm();
    }

    prepareSaveUser(): User {
      const formModel = this.userForm.value;
  
      
      const FriendsDeepCopy: Friends[] = formModel.myFriends.map(
        (friends: Friends) => Object.assign({}, friends)
      );
  
      const saveUser: User = {
      
        name: formModel.name as string,
        
        friends: FriendsDeepCopy
      };
      return saveUser;
    }


}
