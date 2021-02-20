import { Job } from './job.model';
import { Department } from './department.model';
export class Checkout {

  constructor(
    public Name: string,
    public Department_: Department,
    public Description: string,
    public StartDate: Date,
    public EndDate: Date,
    public Jobs: Job[]
  ) {}
}
