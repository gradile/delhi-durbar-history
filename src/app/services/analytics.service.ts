import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private router: Router) {
    this.trackPageViews();
  }

  private trackPageViews(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe({
        next: (event) => {
          this.sendPageView(event.urlAfterRedirects);
        }
      })
  }

  sendPageView(url: string): void {
    gtag('event', 'page_view', {
      page_path: url
    });
  }

  sendEvent(
    action: string,
    category: string,
    label?: string,
    value?: number
  ): void {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
}
