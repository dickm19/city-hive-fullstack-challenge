import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { User } from '../types';

@Component({
    selector: 'app-template-signup',
    template: `
        Username: <input type="text" [(ngModel)]="user.username">
        Password: <input type="password" [(ngModel)]="user.password">
        Phone Number: <input type="text" [(ngModel)]="user.phone_number">
        <button (click)="signup()">Sign Up</button>
    `,
    imports: [FormsModule],
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