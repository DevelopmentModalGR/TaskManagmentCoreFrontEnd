import { User } from './user.model';
import { Checkout } from './checkout.model';

export class Department {
  constructor(
    public Name: string,
    public CheckoutProcesses: Checkout[],
    public Users: User[],
  ){}
}
