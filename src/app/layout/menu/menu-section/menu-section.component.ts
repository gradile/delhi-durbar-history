import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuSection } from '@app/shared/models/menu.model';
import { LinksService } from '../../../services/links.service';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent {
  @Input() section!: MenuSection;
  @Input() isOpen = false;

  @Output() sectionClicked = new EventEmitter<void>();

  toggle(): void {
    this.sectionClicked.emit();
  }

}
