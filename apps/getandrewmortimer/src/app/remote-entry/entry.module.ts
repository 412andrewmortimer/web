import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '@cmdr/shared-ui';

import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeComponent, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
