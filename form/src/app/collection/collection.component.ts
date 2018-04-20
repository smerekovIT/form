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

    this.rebuildForm()
    
 }
   createForm () {
     this.userForm = this.fb.group({
       name: '',
       myFriends: this.fb.array([])
       })
    }

    
    setFriends(friends: Friends[]) {
      console.log(friends)
      const friendsFGs = friends.map(friends => this.fb.group({
      
                firstName: friends.firstName,
                lastName: friends.lastName,
                narrative: friends.narrative,
          hobies: this.fb.array(friends.hobies.map(hobi => this.fb.group(hobi)))
       })
      );
      const friendsFormArray = this.fb.array(friendsFGs);
      
      this.userForm.setControl('myFriends', friendsFormArray);
    }
   
    get myFriends(): FormArray {
      
      return this.userForm.get('myFriends') as FormArray;
    };
 
    addHobies(index) {
       const friendHobies =  this.userForm.get('myFriends')['controls'][`${index}`]['controls']['hobies'] as FormArray
       
       friendHobies.push(this.fb.group(new Hobies()))
    }

    removeFriend(i){
      
      this.myFriends.removeAt(i)
    }
    removeHobies(i, j){
      
      const friendHobies =  this.userForm.get('myFriends')['controls'][`${i}`]['controls']['hobies'] as FormArray
        
      friendHobies.removeAt(j)
    }
    addFriend() {
      
      this.myFriends.push(this.fb.group({
        firstName: '',
        lastName: '',
        narrative: '',
        hobies: this.fb.array([this.fb.group({
          name:'',
          narrative: ''
        })
      ])
      }));
    }

    onSubmit() {
      this.data = this.prepareSaveUser()
      this.collectionService.updateUser(this.data)
      this.rebuildForm();
    }

    prepareSaveUser(): User {
      const formModel = this.userForm.value;
  
      console.log(formModel)
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
