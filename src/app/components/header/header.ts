import { Component, input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = input('hello');
  showButton() {
    console.log('Button is clicked');
  }
}
