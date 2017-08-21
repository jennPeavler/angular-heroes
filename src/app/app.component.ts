import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <h1>Welcome to {{title}}</h1>
    </header>
    <nav>
    <a routerLink='/dashboard' routerLinkActive='active'>Dashboard</a>
    <a routerLink='/heroes' routerLinkActive='active'>Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  title = 'Hero box';
}
