import { User } from './user.model';
import { Checkout } from './checkout.model';

export class Department {
  constructor(
    public id: number,
    public name: string,
    public checkoutProcesses: Checkout[],
    public users: User[],
  ){}
}
