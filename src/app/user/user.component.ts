import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../mocks/dummy-users';
import { User } from '../../types/user.type';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  protected selectedUser: User = DUMMY_USERS[randomUserIndex];
}
