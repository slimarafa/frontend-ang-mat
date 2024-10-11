import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
//garder les données d'authentification dans le service
public username:any;
public isAuthenticated:boolean=false;
public roles:string[]=[];
  public users:any={
    admin:{password:'1234',roles:['STUDENTS','ADMIN']},
    user1:{password:'12345',roles:['STUDENTS']},
  }
  constructor(private router:Router) { }

  public login(username:string, password :string):boolean {
    if(this.users[username]&& this.users[username]['password']==password){
      this.username=username;
      this.isAuthenticated=true;
      this.roles=this.users[username]['roles'];
      return true;
    }else{

      return false;
    }
    
  }
   logout() {
    this.username=undefined;
    this.isAuthenticated=false;
    this.roles=[]
    this.router.navigateByUrl("/login")
  }
}
