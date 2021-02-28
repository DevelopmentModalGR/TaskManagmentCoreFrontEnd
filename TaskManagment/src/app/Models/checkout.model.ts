import { Job } from './job.model';
import { Department } from './department.model';
export class Checkout {

  constructor(
    public name: string,
    public department_: Department,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public jobs: Job[]
  ) {}
}
