import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'web-home',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
<<<<<<< HEAD
<<<<<<< HEAD
  template: `
    <div class="hero min-h-screen">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <ng-container *ngTemplateOutlet="heroContentTemplate"></ng-container>
        </div>
      </div>
    </div>
  `,
=======
  template: `<web-navigation></web-navigation>`,
>>>>>>> 0948386 (Fuss with Shared UI)
=======
  template: `
    <div class="hero min-h-screen">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <ng-container *ngTemplateOutlet="heroContentTemplate"></ng-container>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  </div>`,
>>>>>>> 9b1c87a (Add node version to .nvmrc and dummy content for Home.)
=======
  `,
>>>>>>> 8c4f396 (Make home and navigation dynamic)
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @Input() heroContentTemplate: any;
}
