import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AccountsState, AccountsStore } from './accounts.store';

@Injectable({
  providedIn: 'root'
})
export class AccountsQuery extends QueryEntity<AccountsState> {
  public accounts$ = this.selectAll();

  constructor(protected accountsStore: AccountsStore) {
    super(accountsStore);
  }
}
