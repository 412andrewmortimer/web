import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'empiricalarchetype',
    loadChildren: () =>
      import('empiricalarchetype/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'getandrewmortimer',
    loadChildren: () =>
      import('getandrewmortimer/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
