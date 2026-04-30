import { Component, inject, OnInit } from '@angular/core';
import { LinksService } from '@app/services/links.service';
import { ButtonLink } from '@app/shared/models/button-link.model';

@Component({
  selector: 'app-history-buttons',
  templateUrl: './history-buttons.component.html',
  styleUrls: ['./history-buttons.component.scss']
})
export class HistoryButtonsComponent implements OnInit {
  historyButtons: ButtonLink[] = [];

  private linksService = inject(LinksService);

  ngOnInit(): void {
    this.linksService.getHistoryButtons().subscribe(data => {
      this.historyButtons = data;
    });
  }
}
