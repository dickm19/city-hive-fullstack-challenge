import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User, Message } from './types';
import { SignupTemplateComponent } from './forms/signup';
import { MessageTemplateComponent } from './forms/message';
import { UserService } from '../../shared/user.service';
import { MessageService } from '../../shared/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignupTemplateComponent, CommonModule, MessageTemplateComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  currentUser: User | null = null;
  messages: Message[] = [];
  constructor(private _userService: UserService, private _messageService: MessageService) {}
  protected readonly title = signal('my-sms-messenger');

  ngOnInit() {
    this._userService.getCurrentUser().subscribe((response: any) => {
      this.currentUser = response?.user;
    });

    this._messageService.getMessages().subscribe((response: any) => {
      this.messages = response;
      console.log(response);
    });
  }
}
