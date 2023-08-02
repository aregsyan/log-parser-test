import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import { InputParser, LogFilter, OutputFormatter } from "./interfaces";
import * as readline from 'node:readline/promises';
import * as fs from 'node:fs';
import * as util from 'util';
import * as stream from 'stream';

const streamFinished = util.promisify(stream.finished);


@injectable()
export class Application {
    constructor(
        @inject(TYPES.InputParser) private inputParser: InputParser,
        @inject(TYPES.LogFilter) private logFilter: LogFilter,
        @inject(TYPES.OutputFormatter) private outputFormatter: OutputFormatter
    ) {}

    async start(input: string, output: string) {
        const readStream = fs.createReadStream(input);
        const writeStream = fs.createWriteStream(output);
        const rl = readline.createInterface({
            input: readStream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            const parsedLine = this.inputParser.parse(line);
            const filteredData = this.logFilter.filter(parsedLine);
            if (filteredData) {
                const output = this.outputFormatter.format(filteredData);
                writeStream.write(output);
            }
        }
        writeStream.end();
        await streamFinished(writeStream);
        
    }
}