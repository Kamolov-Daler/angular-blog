// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from "./interface";

export const environment: Environment = {
  production: false,
  apiKey: 'AIzaSyBWScHvmjGYOSP62T0w8aNHOG_4LSyLBUY',
  fbDbUrl: 'https://angular-blog-2adee-default-rtdb.firebaseio.com',
  authDomain: 'https://angular-blog-2adee.web.app/',
  projectId: 'angular-blog',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
