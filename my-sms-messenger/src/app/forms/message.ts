import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../shared/message.service';
import { Message, User } from '../types';

@Component({
    selector: 'app-template-message',
    template: `
        Phone Number: <input type="text" [(ngModel)]="message.recipient_number">
        Message: <textarea [(ngModel)]="message.content"></textarea>
        <button (click)="sendMessage()">Send Message</button>
    `,
    imports: [FormsModule],
})

export class MessageTemplateComponent {
    @Input() currentUser!: User;

    message: Message = {
        recipient_number: '',
        content: ''
    };

    constructor(private _messageService: MessageService) {}

    sendMessage() {
        this._messageService.sendMessage(this.message).subscribe((response) => {
            console.log('Message sent successfully:', response);
        });
    }
    clearMessage() {
        this.message = {
            recipient_number: '',
            content: ''
        };
    }
}