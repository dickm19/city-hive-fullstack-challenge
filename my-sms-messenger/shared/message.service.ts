import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../src/app/types';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MessageService {
    constructor(private _http: HttpClient) { }

    sendMessage(message: Message) {
        return this._http.post('api/messages/send', message)
        .pipe(map((response: any) => response));
    }
}