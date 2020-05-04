import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ID } from '@datorama/akita';
import { Account, EditableAccount } from '../state/accounts.model';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent {
  public editFormOpened = false;
  public accountEditForm: FormGroup;
  @Input()
  public account: Account;
  @Output()
  public delete = new EventEmitter<ID>();
  @Output()
  public editName = new EventEmitter<EditableAccount>();

  constructor(private fb: FormBuilder) {}

  public edit(): void {
    const newName = this.accountEditForm.controls.name.value;
    if (newName) {
      this.editName.emit({
        id: this.account.id,
        name: this.accountEditForm.controls.name.value
      });
      this.toggleEditForm();
    }
  }

  public toggleEditForm(): void {
    if (!this.editFormOpened) {
      this.createAccountEditForm();
    } else {
      this.accountEditForm = null;
    }
    this.editFormOpened = !this.editFormOpened;
  }

  private createAccountEditForm(): void {
    this.accountEditForm = this.fb.group({
      name: ['', []]
    });
  }

}
