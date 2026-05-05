import { Component } from '@angular/core';
import { LinksService } from '@app/services/links.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  sections$ = this.linksService.getMenu();
  openSectionIndex: number | null = null;

  constructor(private linksService: LinksService) {
  }

  toggleSection(index: number): void {
    this.openSectionIndex =
      this.openSectionIndex === index ? null : index;
  }

}
