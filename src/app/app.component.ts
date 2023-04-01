import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<tui-theme-night></tui-theme-night>
  <tui-root tuiMode="onDark"><router-outlet></router-outlet></tui-root>`
})
export class AppComponent {

}
