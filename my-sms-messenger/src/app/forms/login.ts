import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { User } from '../types';

@Component({
    selector: 'app-template-login',
    template: `
        Username: <input type="text" [(ngModel)]="user.username">
        Password: <input type="password" [(ngModel)]="user.password">
        Phone Number: <input type="text" [(ngModel)]="user.phone_number">
        <button (click)="login()">Sign Up</button>
    `,
    imports: [FormsModule],
})

export class LoginTemplateComponent {
    user: User = {
        username: '',
        password: '',
        phone_number: ''
    };

    constructor(private _userService: UserService) {}

    login() {
        this._userService.login(this.user).subscribe((response: any) => {
            console.log('User signed up successfully:', response);
        });
    }
}