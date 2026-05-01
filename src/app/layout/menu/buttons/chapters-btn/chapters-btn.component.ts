import { Component, inject } from '@angular/core';
import { LinksService } from '@app/services/links.service';
import { ButtonLink } from '@app/shared/models/button-link.model';

@Component({
  selector: 'app-chapters-btn',
  templateUrl: './chapters-btn.component.html',
  styleUrls: ['./chapters-btn.component.scss']
})
export class ChaptersBtnComponent {
  chapterButton: ButtonLink[] = [];

    private linksService = inject(LinksService);

    ngOnInit(): void {
      this.linksService.getChapterButton().subscribe(data => {
        this.chapterButton = data;
      });
    }
}
