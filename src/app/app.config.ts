import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideContextService } from '@webkrafters/ng-eagleeye';

import { routes } from './app.routes';

import { getDemoInitState } from '../context-data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideContextService({
      attrs: {
        value: getDemoInitState()
      }
    }),
    provideRouter(routes)
  ]
};
