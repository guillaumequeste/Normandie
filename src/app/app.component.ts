import { Component } from '@angular/core';
import { fader, slider, transformer, stepper } from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
    // slider,
    // transformer,
    // stepper
  ]
})
export class AppComponent {
  title = 'normandie';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
