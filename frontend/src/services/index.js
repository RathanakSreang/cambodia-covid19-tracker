import { defaultHeader } from './defaultHeader';
import {createAxiosResponseInterceptor} from './createAxiosResponseInterceptor';
export * from './user.service';

defaultHeader();
createAxiosResponseInterceptor();
