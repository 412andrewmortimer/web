import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="navbar bg-base-100">
      <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
  </div>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent { }
