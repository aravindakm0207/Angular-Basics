import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bank',
  imports: [FormsModule, NgFor],
  templateUrl: './bank.html',
  styleUrl: './bank.css',
})
export class Bank {
  balance: number = 0;
  amount: number = 0;
  transactions: string[] = [];
  deposit() {
    this.amount = 100;
    this.balance = this.balance + this.amount;
    this.transactions.push('deposited amount is ' + this.amount + ' balance ' + this.balance);
  }

  withdraw() {
    if (this.balance <= 100) {
      alert('low balance');
    } else {
      this.amount = 200;
      this.balance = this.balance - this.amount;
    }
  }
  // ngInit() {
  //   this.deposit();
  // }
  depositA() {
    this.balance += this.amount;
  }
  withdrawA() {
    this.balance = this.balance - this.amount;
  }

  user1Balance: number = 500;
  user2Balance: number = 300;

  user1Transactions: string[] = [];
  user2Transactions: string[] = [];

  depositFromUser1ToUser2() {
    this.user1Balance -= this.amount;
    this.user2Balance += this.amount;

    this.user1Transactions.push(
      'Sent: ' + this.amount + ' to User2  Balance: ' + this.user1Balance
    );

    this.user2Transactions.push(
      'Received: ' + this.amount + ' from User1  Balance: ' + this.user2Balance
    );
  }

  depositFromUser2ToUser1() {
    this.user2Balance -= this.amount;
    this.user1Balance += this.amount;

    this.user2Transactions.push(
      'Sent: ' + this.amount + ' to User1 | Balance: ' + this.user2Balance
    );

    this.user1Transactions.push(
      'Received: ' + this.amount + ' from User2 | Balance: ' + this.user1Balance
    );
  }
}
