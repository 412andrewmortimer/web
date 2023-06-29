import { Component } from '@angular/core';
import { HomeComponent } from '@cmdr/shared-ui';
@Component({
  selector: 'cmdr-getandrewmortimer-entry',
  template: `<web-home></web-home>`,
  standalone: true,
  imports: [HomeComponent],
})
export class RemoteEntryComponent {}
