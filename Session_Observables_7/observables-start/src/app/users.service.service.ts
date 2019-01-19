import { Subject } from 'rxjs';

export class UsersService {
  constructor() {}

  userActivated = new Subject();
}
