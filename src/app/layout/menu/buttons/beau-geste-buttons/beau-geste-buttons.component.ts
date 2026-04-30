import { Component, inject, OnInit } from '@angular/core';
import { LinksService } from '@app/services/links.service';
import { ButtonLink } from '@app/shared/models/button-link.model';

@Component({
  selector: 'app-beau-geste-buttons',
  templateUrl: './beau-geste-buttons.component.html',
  styleUrls: ['./beau-geste-buttons.component.scss']
})
export class BeauGesteButtonsComponent implements OnInit {

  beauGesteButtons: ButtonLink[] = [];

  private linksService = inject(LinksService);

  ngOnInit(): void {
    this.linksService.getBeauGesteButtons().subscribe(data => {
      this.beauGesteButtons = data;
    });
  }
}

