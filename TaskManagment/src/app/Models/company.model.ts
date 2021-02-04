import { User } from './user.model';

export class Company {
  constructor(
    public Name: string,
    public CNPJ: string,
    public Users: User[]
  ) {}
}
