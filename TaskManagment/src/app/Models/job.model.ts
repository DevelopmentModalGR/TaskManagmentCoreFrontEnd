import { User } from './user.model';

export class Job {
  constructor(
    public  Name: string,
    public  PredecessorTaskStatus: number,
    public  StartDate: Date,
    public  EndDate: Date,
    public  Status: number,
    public  Users: User[]
  ){}
}
