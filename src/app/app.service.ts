import { Injectable } from '@angular/core';

import { Content } from './app-data-types';
import { CONTENT } from './app-content';

@Injectable()
export class AppService {
  getContent(): Promise<Content[]> {
    return Promise.resolve(CONTENT)
  }

  constructor() { }

}
