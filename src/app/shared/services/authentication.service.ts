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
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
    sessionStorage.setItem('user', JSON.stringify(newUser))
  }

  loginUser(username : string, password : string){
    return this.users.find( (user) => user.username === username && user.password === password);
  }
}
