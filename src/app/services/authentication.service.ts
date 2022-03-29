import { Injectable } from '@angular/core';
import {User} from "../model/users.model";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

users: User[] = [{"username":"AsmaaBouta","password":"1234","roles":['ADMIN_APP']},
                {"username":"KhadijaKarimi","password":"1234","roles":['SUPER_ADMIN','ADMIN_AGENCE']}
                ];


public loggedUser:string;
public isloggedIn: Boolean = false;
public roles:string[];
constructor() { }

SignIn(user :User):Boolean{
  let validUser: Boolean = false;
  this.users.forEach((curUser)=>{
    if(user.username=== curUser.username && user.password==curUser.password){
      validUser = true;
      this.loggedUser = curUser.username;
      this.isloggedIn=true;
      this.roles=curUser.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
    }
  });
  return validUser;
}

}
