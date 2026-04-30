import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { ButtonLink } from '../shared/models/button-link.model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(public http: HttpClient) { }

  getBeauGesteLinks(): Observable<RouterLink[]> {
    return this.http.get<RouterLink[]>('assets/router-links-bg.json')
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }

  // getHistoryLinks(): Observable<RouterLink[]> {
  //   return this.http.get<RouterLink[]>('assets/router-links-history.json')
  //     .pipe(
  //       shareReplay({ bufferSize: 1, refCount: true })
  //     );
  // }

  getHomeButtons(): Observable<ButtonLink[]> {
    return this.http.get<ButtonLink[]>('./assets/home-buttons.json')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  getHistoryButtons(): Observable<ButtonLink[]> {
    return this.http.get<ButtonLink[]>('./assets/history-buttons.json')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  getBeauGesteButtons(): Observable<ButtonLink[]> {
    return this.http.get<ButtonLink[]>('assets/beau-geste-buttons.json')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  getBeauGesteSetsButton(): Observable<ButtonLink[]> {
    return this.http.get<ButtonLink[]>('assets/beau-geste-sets.json')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
}
