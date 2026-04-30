import { Component, inject, OnInit } from '@angular/core';
import { LinksService } from '@app/services/links.service';
import { ButtonLink } from '@app/shared/models/button-link.model';

@Component({
  selector: 'app-home-buttons',
  templateUrl: './home-buttons.component.html',
  styleUrls: ['./home-buttons.component.scss']
})
export class HomeButtonsComponent implements OnInit {
  homeButtons: ButtonLink[] = [];
  private linksService = inject(LinksService);

  ngOnInit(): void {
    this.linksService.getHomeButtons().subscribe(data => {
      this.homeButtons = data;
    });
  }
}
