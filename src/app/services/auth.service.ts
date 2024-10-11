import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users:any={
    admin:{password:'1234',roles:['STUDENTS','ADMIN']},
    users1:{password:'12345',roles:['STUDENTS']},
  }
  constructor() { }

  public login(username:string, password :string):boolean {
    if(this.users[username]&& this.users[username]['password']==password){
      return true;
    }
    return false;
  }
}
