import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  //Get app name from main component
  @Input() appName: string = '';

  //Change app name once clicked the app name
  @Output() textClicked = new EventEmitter<string>();

  //constructor to intialize and inject dependencies
  constructor(){}

  onClick() {
    this.textClicked.emit('Text from header Component!');
  }
}
