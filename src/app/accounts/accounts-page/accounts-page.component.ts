import { Component, OnInit } from '@angular/core';
import { AccountsQuery } from '../state/accounts.query';
import { AccountsService } from '../state/accounts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditableAccount } from '../state/accounts.model';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html'
})
export class AccountsPageComponent implements OnInit {
  public accountForm: FormGroup;

  constructor(
    public accountsQuery: AccountsQuery,
    private accountsService: AccountsService,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.accountForm = this.fb.group({
      name: ['', []],
      currency: ['', []]
    });
  }

  public delete(id: string): void {
    this.accountsService.deleteAccount(id);
  }

  public editName(editableAccount: EditableAccount): void {
    this.accountsService.updateAccount(editableAccount);
  }

  public creatAccount(): void {
    if (this.accountForm.valid) {
      this.accountsService.createAccount(
        this.accountForm.controls.name.value,
        this.accountForm.controls.currency.value
      );
      this.accountForm.reset();
    }
  }

  public resetAccounts(): void {
    this.accountsService.resetStore();
  }

}
