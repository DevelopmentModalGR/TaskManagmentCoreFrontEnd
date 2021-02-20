import { Job } from './job.model';
import { Department } from './department.model';
import { Company } from './company.model';

export class User {
  constructor(
    public Id: number,
    public Name: string,
    public Email: string,
    public SignUpDate: Date,
    public IsActive: boolean,
    public IsAdmin: boolean,
    public Password: string,
    public Role: string,
    public CompanyId: number,
    public Company_: Company,
    public Departments: Department[],
    public Jobs: Job[]
  ) {}
}
