import { Injectable, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly auth = inject(Auth)

  login(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

}
