import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { User, UserErrors } from '../types';

@Component({
    selector: 'app-template-signup',
    template: `
        <div class="signup-form">
            <div class="form-group">
                <label for="phone_number">Phone Number:</label>
                <input type="text" id="phone_number" [(ngModel)]="user.phone_number">
                <div class="error" *ngIf="userErrors.phone_number">
                    <span> Please enter a valid phone number.</span>
                </div>
            </div>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" [(ngModel)]="user.username">
                <div class="error" *ngIf="userErrors.username">
                    <span>Username {{ userErrors.username }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" [(ngModel)]="user.password">
                <div class="error" *ngIf="userErrors.password">
                    <span>{{ userErrors.password }}</span>
                </div>
            </div>
            <button (click)="signup()">Sign Up</button>
        </div>
    `,
    imports: [FormsModule, CommonModule],
    styleUrls: ['./form.scss'],
})

export class SignupTemplateComponent {
    @Output() signedUp = new EventEmitter<User>();

    user: User = {
        username: '',
        password: '',
        phone_number: ''
    };

    userErrors: UserErrors = {};

    constructor(private _userService: UserService) {}

    signup() {
        this._userService.signup(this.user).subscribe({
            next: (user) => this.signedUp.emit(user),
            error: (response) => {
                this.userErrors = response.error.messages || {};
            }
        });
    }
}