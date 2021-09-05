import { Component } from '@angular/core';

@Component({
  selector: "app",
  // switched from <store> because now we are URL routing
  // angular expects to look for this router-outlet element when using the RouterModule class to set up URL routing
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
}
