import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: '<button (click)="handleButtonClick()" >{{label()}}</button>',
  styleUrl: './button.css',
})
export class Button {
  label = input('');

  btnclicked = output();
  handleButtonClick() {
    this.btnclicked.emit();
  }
}
