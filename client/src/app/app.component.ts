import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collapsed: boolean = true;

  collapse(data: boolean) {
    this.collapsed = data;
  }
}
