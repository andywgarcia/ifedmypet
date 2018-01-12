import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  
  constructor() {}
  
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
  }

}
