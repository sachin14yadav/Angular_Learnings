export class CounterService {
  toActiveCounter = 0;
  toInactiveCounter = 0;

  increaseCounter(action: string) {
    if (action === 'toActive') {
      this.toActiveCounter++;
    } else if (action === 'toInactive') {
      this.toInactiveCounter++;
    }
    console.log('Number of Active actions: ' + this.toActiveCounter + ', Number of Inactive actions: ' + this.toInactiveCounter);
  }
}
