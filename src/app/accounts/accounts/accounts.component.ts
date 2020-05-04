import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ID } from '@datorama/akita';
import { Account, EditableAccount } from '../state/accounts.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {
  @Input()
  public accounts: Account[];
  @Output()
  public delete = new EventEmitter<ID>();
  @Output()
  public editName = new EventEmitter<EditableAccount>();
}
