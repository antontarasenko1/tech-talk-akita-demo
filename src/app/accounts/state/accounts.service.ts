import { Injectable } from '@angular/core';
import { AccountsStore } from './accounts.store';
import { createAccount, EditableAccount } from './accounts.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(private accountsStore: AccountsStore) {}

  public createAccount(name: string, currency: string): void {
    const account = createAccount({
      name,
      currency
    });
    this.accountsStore.add(account);
  }

  public updateAccount(editableAccount: EditableAccount): void {
    this.accountsStore.update(editableAccount.id, { name: editableAccount.name });
  }

  public deleteAccount(id: string): void {
    this.accountsStore.remove(id);
  }

  public resetStore(): void {
    this.accountsStore.reset();
  }

}
