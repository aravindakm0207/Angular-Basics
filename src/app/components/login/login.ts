import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  handleSubmit() {
    alert('kindly login');
    this.otherFunction();
  }

  otherFunction() {
    console.log('function called');
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }
  count = 0;

  handleCount(val: String) {
    if (val == 'minus') {
      this.count = this.count - 1;
    } else if (val == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  handleEvent(event: Event) {
    console.log('function called', event.type);
    console.log('value', (event.target as HTMLInputElement).value);
    console.log('function called', (event.target as Element).classList);
  }
}
