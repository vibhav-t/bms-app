import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  appName: string = 'Blog Management System';
  constructor(){}

  //change the app name
  onTextClicked(text: string) {
    this.appName = text;
  }
}
