import { User } from './user.model';

export class Job {
  constructor(
    public id: number,
    public  name: string,
    public  predecessorTaskStatus: number,
    public  startDate: Date,
    public  endDate: Date,
    public  status: number,
    public  users: User[],
    public  items: any[],
    public totalItemCount: number
  ){}
}
