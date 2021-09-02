import { Component } from '@angular/core';

@Component({
  selector: "app",
  // switched from <store> because now we are URL routing
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
}
