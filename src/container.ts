import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { OutputFormatter, InputParser, LogFilter } from './interfaces';
import { LogFilterService, ExampleInputParser, JsonOutputFormatter } from './services';
import {Application} from "./Application";


const container = new Container();

container.bind<OutputFormatter>(TYPES.OutputFormatter).to(JsonOutputFormatter).inSingletonScope();
container.bind<InputParser>(TYPES.InputParser).to(ExampleInputParser).inSingletonScope();
container.bind<LogFilter>(TYPES.LogFilter).to(LogFilterService).inSingletonScope();
container.bind<Application>(TYPES.Application).to(Application).inSingletonScope();

export default container;
