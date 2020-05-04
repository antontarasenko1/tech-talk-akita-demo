import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AccountsComponent],
  declarations: [AccountsComponent, AccountsPageComponent, AccountComponent]
})
export class AccountsModule {}
