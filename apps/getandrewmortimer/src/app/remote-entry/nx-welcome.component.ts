import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cmdr-nx-welcome',
  template: `
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost normal-case text-xl">GetAM</a>
    <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
  </div>
  <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent { }
