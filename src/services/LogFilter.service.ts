import { LogFilter, ParsedLog, LogLevel, Log } from '../interfaces';
import { injectable } from 'inversify';
import { ErrorLog } from '../logLevels';


@injectable()
export class LogFilterService implements LogFilter {
    public filter(log: ParsedLog): Log | undefined {
        const { timestamp, logLevel, transactionId, message } = log;
        console.log(message);
        switch(logLevel) {
            case LogLevel.ERROR:
                return new ErrorLog(
                    timestamp,
                    logLevel,
                    transactionId,
                    message.err
                );
            default:
                return undefined;
        }
    }
}