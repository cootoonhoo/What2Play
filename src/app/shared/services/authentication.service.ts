import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users : Array<User> = [];

  constructor() {

   }

  getUsers() {
    return this.users;
  }

  createUser(newUser : User){
    newUser.id = this.users[this.users.length - 1].id! + 1;
    this.users.push(newUser);
  }

  loginUser(username : string, password : string) : boolean {
    let validation = false;
    this.users.forEach( user => {
      if(user.username == username){
        if(user.password == password){
          validation = true;
        }
      }
    })
    return validation;
  }
}
