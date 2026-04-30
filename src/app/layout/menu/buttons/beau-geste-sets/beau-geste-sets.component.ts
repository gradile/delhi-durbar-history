import { Component, inject, OnInit} from '@angular/core';
import { LinksService } from '@app/services/links.service';
import { ButtonLink } from '@app/shared/models/button-link.model';

@Component({
  selector: 'app-beau-geste-sets',
  templateUrl: './beau-geste-sets.component.html',
  styleUrls: ['./beau-geste-sets.component.scss']
})
export class BeauGesteSetsComponent implements OnInit {
  private linksService = inject(LinksService);
  beauGesteSets: ButtonLink[] = [];

  ngOnInit(): void {
    this.linksService.getBeauGesteSetsButton().subscribe(data => {
      this.beauGesteSets = data;
    });
  }
}
