import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { User } from '../types';

@Component({
    selector: 'app-template-signup',
    template: `
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" [(ngModel)]="user.username">
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" [(ngModel)]="user.password">
        </div>
        <div class="form-group">
            <label for="phone_number">Phone Number:</label>
            <input type="text" id="phone_number" [(ngModel)]="user.phone_number">
        </div>
        <button (click)="signup()">Sign Up</button>
    `,
    imports: [FormsModule],
    styleUrls: ['./form.scss'],
})

export class SignupTemplateComponent {
    user: User = {
        username: '',
        password: '',
        phone_number: ''
    };

    constructor(private _userService: UserService) {}

    signup() {
        this._userService.signup(this.user).subscribe((response) => {
            console.log('User signed up successfully:', response);
        });
    }
}