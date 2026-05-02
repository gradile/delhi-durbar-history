import { Component, inject, OnInit } from '@angular/core';
import { LinksService } from '@app/services/links.service';
import { ButtonLink } from '@app/shared/models/button-link.model';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  stateButtons: ButtonLink[] = [];

  private linksService = inject(LinksService);

  ngOnInit(): void {
    this.linksService.getStatesButtons().subscribe(data => {
      this.stateButtons = data;
    });
  }
}
