import { Component } from '@angular/core';
import { HomeComponent } from '@web/shared-ui';

@Component({
  selector: 'web-empiricalarchetype-entry',
  template: `<web-home></web-home>`,
  standalone: true,
  imports: [HomeComponent],
})
export class RemoteEntryComponent {}
