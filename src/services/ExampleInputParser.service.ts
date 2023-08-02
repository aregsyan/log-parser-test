import { InputParser, ParsedLog } from '../interfaces';
import { injectable } from 'inversify';
import { LogLevel } from '../interfaces';

@injectable()
export class ExampleInputParser implements InputParser {
    public parse(input: string): ParsedLog {
        const [timestamp, logLevel, ...rest] = input.split(' - ');
        const {transactionId, ...restMessage} = JSON.parse(rest.join(' - '));
        return { 
            timestamp: new Date(timestamp),
            logLevel: logLevel as LogLevel,
            transactionId: transactionId as string,
            message: restMessage,
        };
    }
}