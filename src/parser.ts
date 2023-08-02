import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { vaildateFilePath } from './utils';
import container from './container';
import { TYPES } from './types';
import { Application } from './Application';

const argv = yargs(hideBin(process.argv))
  .alias('i', 'input')
  .describe('input', 'input log file')
  .alias('o', 'output')
  .describe('output', 'output file')
  .help('help')
  .required('input', 'input file is required!')
  .required('output', 'output file is required!')
  .argv;

async function bootstrap() {
    const { input, output } = await argv;
    vaildateFilePath(input as string);
    const app = container.get<Application>(TYPES.Application);
    app.start(input as string, output as string);
}

bootstrap()
.then(() => {
  console.log('done');
})
.catch((err) => {
  console.error(err);
});