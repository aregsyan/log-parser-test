import { LogLevel } from "./LogLevel";

export abstract class Log {
	constructor(public timestamp: Date, public loglevel: LogLevel, public transactionId: string, ...args: string[]) {}
}