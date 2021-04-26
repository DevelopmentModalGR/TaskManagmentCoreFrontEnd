import { Job } from './job.model';
import { Department } from './department.model';
export class Checkout {

  constructor(
    public id: number,
    public name: string,
    public department: Department,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public jobs: Job[]
  ) {}
}
