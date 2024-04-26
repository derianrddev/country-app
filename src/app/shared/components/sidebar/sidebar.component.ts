import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  public showMenu: boolean = true;

  openMenu(): void {
    this.showMenu = true;
  }

  closeMenu(): void {
    this.showMenu = false;
  }
}
