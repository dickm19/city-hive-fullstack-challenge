import { Component, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { User } from './types';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  currentUser: User | null = null;
  constructor(private _userService: UserService) {}
  protected readonly title = signal('my-sms-messenger');

  ngOnInit() {
    this._userService.getCurrentUser().subscribe((response: any) => {
      this.currentUser = response?.user;
    });
  }
}
