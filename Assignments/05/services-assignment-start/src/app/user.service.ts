import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.increaseCounter('toInactive');
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.increaseCounter('toActive');
  }

  onAddUser(name: string, status: string) {
    if (status === 'active') {
      this.activeUsers.push(name);
    } else if (status === 'inactive') {
      this.inactiveUsers.push(name);
    }
  }
}
