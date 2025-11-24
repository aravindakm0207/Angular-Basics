import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: '<app-header></app-header>',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
