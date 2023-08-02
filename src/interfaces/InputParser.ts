import { LogLevel } from './LogLevel';
export interface InputParser {
    parse(input: string): ParsedLog;
}

export interface ParsedLog {
    timestamp: Date;
    message: any;
    transactionId: string;
    logLevel: LogLevel;
}