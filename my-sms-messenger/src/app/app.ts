import { Component, signal, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User, Message } from './types';
import { SignupTemplateComponent } from './forms/signup';
import { MessageTemplateComponent } from './forms/message';
import { UserService } from '../../shared/user.service';
import { MessageService } from '../../shared/message.service';
import { CommonModule } from '@angular/common';
import { LoginTemplateComponent } from './forms/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignupTemplateComponent, CommonModule, MessageTemplateComponent, LoginTemplateComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  currentUser: User | null = null;
  messages: Message[] = [];
  signUp: boolean = true;

  constructor(private _userService: UserService, private _messageService: MessageService, private cdr: ChangeDetectorRef) {}
  protected readonly title = signal('my-sms-messenger');

  trackByMessages(index: number, message: Message): string {
    return message.id;
  }

  ngOnInit() {
    // for some reason, the session is not being set correctly in the browser
    // so we are checking the session storage for the token
    sessionStorage.getItem("Token");
    this.getCurrentUser();
    this.getMessages();
  }

  getMessages() {
    this._messageService.getMessages().subscribe((response: any) => {
      this.messages = response;
    });
  }

  getCurrentUser() {
    this._userService.getCurrentUser().subscribe((response: any) => {
      this.currentUser = response;
    });
  }

  onMessageReceived(message: Message) {
    this.messages = [...this.messages, message]
    this.cdr.detectChanges();
  }

  handleSignOut() {
    this._userService.signout().subscribe(() => {
      this.currentUser = null;
    })
  }

  toggleSignUp() {
    this.signUp = !this.signUp;
  }

  }
}
