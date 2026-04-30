import { Component } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {
  constructor(private analytics: AnalyticsService) {

  }
  printPage() {
    window.print();
    this.analytics.sendEvent(
      'click',
      'button',
      'print-this-page'
    );

  }
}
