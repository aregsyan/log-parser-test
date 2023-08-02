import { Log } from './Log';

export interface OutputFormatter {
    format(logs: Log): string;
}