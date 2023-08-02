import { OutputFormatter, Log } from '../interfaces';
import { injectable } from 'inversify';

@injectable()
export class JsonOutputFormatter implements OutputFormatter {
    public format(log: Log): string {
        return JSON.stringify({ ...log, timestamp: log.timestamp.getTime() });
    }
}