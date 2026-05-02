import { Component, inject } from '@angular/core';
import { LayoutModule } from "@app/layout/layout.module";
import { LinksService } from '@app/services/links.service';
import { ButtonLink } from '@app/shared/models/button-link.model';

@Component({
  selector: 'app-states-pages-buttons',
  templateUrl: './states-pages-buttons.component.html',
  styleUrls: ['./states-pages-buttons.component.scss'],
})
export class StatesPagesButtonsComponent {
  statesPagesButton: ButtonLink[] = [];

  private linksService = inject(LinksService);

  ngOnInit(): void {
    this.linksService.getStatesPagesButtons().subscribe(data => {
      this.statesPagesButton = data;
    });
  }

}
