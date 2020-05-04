import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Account } from './accounts.model';

export interface AccountsState extends EntityState<Account> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'accounts', resettable: true })
export class AccountsStore extends EntityStore<AccountsState> {
  constructor() {
    super();
  }
}
