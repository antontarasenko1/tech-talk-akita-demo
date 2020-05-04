import { guid } from '@datorama/akita';

export interface EditableAccount {
  id: string;
  name: string;
}

export interface Account {
  id: string;
  name: string;
  currency: string;
  balance: number;
}

export function createAccount({ name, currency}) {
  return {
    id: guid(),
    name,
    currency,
    balance: Number((Math.random() * 100).toFixed(6))
  } as Account;
}
