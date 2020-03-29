import { defaultHeader } from './defaultHeader';
import {createAxiosResponseInterceptor} from './createAxiosResponseInterceptor';
export * from './common.service';
export * from './news.service';

defaultHeader();
createAxiosResponseInterceptor();
