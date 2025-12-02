import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bankaccounts',
  imports: [FormsModule, NgFor],
  templateUrl: './bankaccounts.html',
  styleUrl: './bankaccounts.css',
})
export class Bankaccounts {
  account1 = new BankAccount('A1234', 'Aravind', 500);
  account2 = new BankAccount('B1234', 'Kohli', 500);

  // accounts: BankAccount[] = [];
  accounts: BankAccount[] = [this.account1, this.account2];
  amount: number = 0;
  accountNumber: string = '';
  accountHolderName: string = '';
  accountbalance: number = 0;
  addAccount() {
    if (this.accountNumber && this.accountHolderName && this.accountbalance >= 0) {
      const newAccount = new BankAccount(
        this.accountNumber,
        this.accountHolderName,
        this.accountbalance
      );

      this.accounts.push(newAccount);

      this.accountNumber = '';
      this.accountHolderName = '';
      this.accountbalance = 0;
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

  transferAmount: number = 0;
  sourceAccountNumber: string = '';
  targetAccountNumber: string = '';

  transferMoney() {
    const sourceAccount = this.accounts.find(
      (account) => account.accountNumber === this.sourceAccountNumber
    );
    const targetAccount = this.accounts.find(
      (account) => account.accountNumber === this.targetAccountNumber
    );

    if (!sourceAccount || !targetAccount) {
      alert('Invalid account numbers.');
      return;
    }

    if (sourceAccount.accountbalance < this.transferAmount) {
      alert('Insufficient balance in source account.');
      return;
    }

    sourceAccount.accountbalance -= this.transferAmount;
    targetAccount.accountbalance += this.transferAmount;

    this.sourceAccountNumber = '';
    this.targetAccountNumber = '';
    this.transferAmount = 0;

    alert('Transfer successful!');
  }
  constructor() {}
}

class BankAccount {
  accountNumber: string;
  accountHolderName: string;
  accountbalance: number;

  constructor(accountNumber: string, accountHolderName: string, accountbalance: number) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountbalance = accountbalance;
  }
}
