import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile: object={
    name: "alicia123",
    contactInfo: 3958302034,
    Bio: "hi"

  };

  constructor(private router: Router) { }


getUserProfile():any{
return this.userProfile;
}

setUserProfile(formInfo: object):any{
this.userProfile=formInfo
}
editProfile(){
  this.router.navigate(['edit'])

}

}
