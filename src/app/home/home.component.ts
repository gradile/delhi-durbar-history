import { Component } from '@angular/core';
import { ButtonLink } from 'app/shared/models/button-link.model';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
sectionTitle = "Delhi Durbar 1903";
}
