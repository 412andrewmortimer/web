import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="navbar fixed top-0 left-0 right-0 z-50 shadow-lg border-none">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-5 p-2 shadow-lg bg-base-100 rounded-box w-52">
            <li *ngFor="let menuItem of menuItems">
              <a>{{ menuItem }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl">{{ siteTitle }}</a>
      </div>
      <div class="navbar-end"></div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent {
  @Input() menuItems: string[] | undefined;
  @Input() siteTitle: string | undefined;
}
