import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, Friend! </p>
    }
    @else {
      <p>Please login =¨</p>
    }
  `,
  standalone: true,
})
export class AppComponent {
  // add the boolean property here
  isLoggedIn = true;
}
