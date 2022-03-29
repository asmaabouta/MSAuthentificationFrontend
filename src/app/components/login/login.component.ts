import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../model/users.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new User();
 erreur = 0;
  public host:string="http://loalhost:8087";
  constructor(private authService : AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {

  }

  onLoggedin(){
  console.log(this.user);
  let isValideUser: Boolean = this.authService.SignIn(this.user);
  if (isValideUser)
    this.router.navigate(['/sidebar']);
  else
    this.erreur = 1;
  }








  /* loginUser(): void {
     this.authService
       .loginUser(this.loginUserData)
       .subscribe(res => {
         localStorage.setItem('access_token', res.access_token);
         localStorage.setItem('refresh_token', res.refresh_token);
         this.message = 'succeded';
         this.router.navigate(['/login']);
       }, err => {
         this.message = 'Merci de verifier votre username et mot de passe!';
         this.errorMessage = true;
       });
   }*/




}
