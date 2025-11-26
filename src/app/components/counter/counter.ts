import { Component, effect, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);
  displayForm = signal(false);

  constructor() {
    effect(() => {
      console.log(this.count());
    });

    effect(() => {
      if (this.displayForm()) {
        setTimeout(() => this.displayForm.set(false), 2000);
      }
    });
  }

  showForm() {
    this.displayForm.set(true);
  }

  incre() {
    this.count.set(this.count() + 1);
  }

  data = signal<number>(0);
  updatesignal() {
    this.data.update((val) => val + 1);
  }

  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());
  showValue() {
    this.x.set(200);
    console.log(this.z());
  }
}
