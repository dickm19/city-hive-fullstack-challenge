import { Component, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private http: HttpClient) {}
  protected readonly title = signal('my-sms-messenger');

  ngOnInit() {
    this.http.get('/').subscribe((response: any) => {
    });
  }
}
