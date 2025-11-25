import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Login],
  template: '<app-header></app-header> <app-login></app-login>',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
