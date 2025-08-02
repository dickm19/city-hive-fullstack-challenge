import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../shared/message.service';
import { Message, User } from '../types';

@Component({
    selector: 'app-template-message',
    template: `
        <div class="message-form">
            <h1>New Message</h1>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" [(ngModel)]="message.recipient_number">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea [(ngModel)]="message.content"></textarea>
            </div>
            <div class="actions">
                <button (click)="clearMessage()" id="clear-button">Clear</button>
                <button (click)="sendMessage()">Submit</button>
            </div>
        </div>
    `,
    imports: [FormsModule],
    styleUrl: './form.scss',
    outputs: ["messageSent"]
})

export class MessageTemplateComponent {
    @Input() currentUser!: User;
    @Output() messageSent = new EventEmitter<Message>();

    message: Message = {
        recipient_number: '',
        content: '',
        id: ''
    };

    constructor(private _messageService: MessageService) {}

    sendMessage() {
        this._messageService.sendMessage(this.message).subscribe((response) => {
            this.messageSent.emit(response);
            this.clearMessage();
        });
    }
    clearMessage() {
        this.message = {
            recipient_number: '',
            content: '',
            id: ''
        };
    }
}