import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconContact } from '../icons/contact';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="border-b border-gray-500/50 mb-8">
      <div class="px-4 xl:px-0 w-full max-w-[1200px] m-auto py-6">
        <a routerLink="/dashboard" class="flex gap-x-4">
          <app-icon-contact />
          <p>Contacts</p>
        </a>
      </div>
      <div>
        <button (click)="login()">LOGIN</button>
      </div>
    </nav>
  `,
  imports: [IconContact, RouterLink],
  providers: [UserService]
})
export class NavbarComponent {
  private readonly userService = inject(UserService);

  login(){
    this.userService.login().then( res => {
      console.log(res);
    })
    .catch(err => console.error(err));
  }

}
