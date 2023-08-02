import { ParsedLog } from './InputParser';
import { Log } from './Log';

export interface LogFilter {
    filter(logs: ParsedLog): Log | undefined;
}