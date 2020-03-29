import { defaultHeader } from './defaultHeader';
import {createAxiosResponseInterceptor} from './createAxiosResponseInterceptor';
export * from './common.service';

defaultHeader();
createAxiosResponseInterceptor();
