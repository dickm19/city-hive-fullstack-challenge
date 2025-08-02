import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../src/app/types';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MessageService {
    constructor(private _http: HttpClient) { }

    sendMessage(message: Message) {
        return this._http.post('http://localhost:3000/api/messages/send', message , { withCredentials: true })
        .pipe(map((response: any) => response));
    }

    getMessages() {
        return this._http.get('http://localhost:3000/api/messages/index', { withCredentials: true })
        .pipe(map((response: any) => response));
    }
}