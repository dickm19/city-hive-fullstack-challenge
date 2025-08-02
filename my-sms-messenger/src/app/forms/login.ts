import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { User } from '../types';

@Component({
    selector: 'app-template-login',
    template: `
        <div class="form-group">
            <label for="phone_number">Phone Number:</label>
            <input type="text" id="phone_number" [(ngModel)]="user.phone_number">
        </div>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" [(ngModel)]="user.username">
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" [(ngModel)]="user.password">
        </div>
        <button (click)="login()">Log In</button>
    `,
    imports: [FormsModule],
    styleUrls: ['./form.scss'],
})

export class LoginTemplateComponent {
    @Output() loggedIn = new EventEmitter<User>();
    user: User = {
        username: '',
        password: '',
        phone_number: ''
    };

    constructor(private _userService: UserService) {}

    login() {
        this._userService.login(this.user).subscribe((response: any) => {
            this.loggedIn.emit(response);
        });
    }
}