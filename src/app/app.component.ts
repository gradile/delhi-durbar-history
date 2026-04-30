import { Component } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Delhi Durbar 1903';

  constructor(private analytics: AnalyticsService) {
    
  }
}
