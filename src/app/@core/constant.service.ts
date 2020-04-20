import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
    server_url = environment.server_url;
}
