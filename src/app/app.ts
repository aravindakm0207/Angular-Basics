import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Login } from './components/login/login';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Login, Counter],
  template: '<app-header></app-header> <app-login></app-login><app-counter></app-counter>',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
