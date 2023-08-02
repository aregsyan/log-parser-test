import { Log } from '../interfaces/Log';
import { LogLevel } from '../interfaces';

export class ErrorLog extends Log {
	public err: any;
	constructor(timestamp: Date, loglevel: LogLevel, transactionId: string, err: any) {
		super(timestamp, loglevel, transactionId);
		this.err = err;
	}
}
