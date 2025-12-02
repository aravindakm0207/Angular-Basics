import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Login } from './components/login/login';
import { Counter } from './components/counter/counter';
import { Bank } from './components/bank/bank';
import { Bankaccounts } from './components/bankaccounts/bankaccounts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Login, Counter, Bank, Bankaccounts],
  template:
    '<app-header></app-header> <app-login></app-login><app-counter></app-counter><app-bank></app-bank><app-bankaccounts></app-bankaccounts>',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
