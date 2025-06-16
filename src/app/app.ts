import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [HeaderComponent, UserComponent],
  styleUrl: './app.scss',
})
export class App {}
