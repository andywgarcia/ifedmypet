import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger, state} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('toggleMenu', [
      state('true', style({opacity: 1, transform: 'translateX(0)'}) ),
      state('false', style({opacity: 0, transform: 'translateX(-75%)'}) ),
      transition('false => true', animate('0.35s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
      ]))),
      transition('true => false', animate('0.35s ease-in', keyframes([
        style({opacity: 1, transform: 'translateX(0)', offset: 0}),
        style({opacity: 0, transform: 'translateX(-75%)', offset: 1.0}),
      ])))
  ])]
})
export class NavBarComponent implements OnInit {
  isCollapsed = false;
  constructor() {}

  ngOnInit() {
    this.isCollapsed = false;
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
