import { Job } from './job.model';
import { Department } from './department.model';
import { Company } from './company.model';

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public signUpDate: Date,
    public isActive: boolean,
    public isAdmin: boolean,
    public password: string,
    public role: string,
    public companyId: number,
    public company_: Company,
    public departments: Department[],
    public jobs: Job[]
  ) {}
}
