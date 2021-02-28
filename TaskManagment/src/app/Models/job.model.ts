import { User } from './user.model';

export class Job {
  constructor(
    public  name: string,
    public  predecessorTaskStatus: number,
    public  startDate: Date,
    public  endDate: Date,
    public  status: number,
    public  users: User[]
  ){}
}
