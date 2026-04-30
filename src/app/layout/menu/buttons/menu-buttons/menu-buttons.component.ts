import { Component, Input } from '@angular/core';
import { ButtonLink } from 'app/shared/models/button-link.model';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.scss']
})
export class MenuButtonsComponent {
    @Input() buttons: ButtonLink[] = [];
}
