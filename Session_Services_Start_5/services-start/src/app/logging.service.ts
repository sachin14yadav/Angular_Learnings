export class LoggingService {
  logStatuChaneg(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
