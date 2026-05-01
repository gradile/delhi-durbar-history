import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { ButtonLink, MenuData } from '../shared/models/button-link.model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private menuData$ = this.http
    .get<MenuData>('assets/json/menu-data.json')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  constructor(public http: HttpClient) { }

  getBeauGesteLinks(): Observable<ButtonLink[]> {
    return this.menuData$.pipe(map(data => data["beau-geste-sets"]));
  }

  getHomeButtons(): Observable<ButtonLink[]> {
    return this.menuData$.pipe(map(data => data["home-page"]));
  }

  getHistoryButtons(): Observable<ButtonLink[]> {
    return this.menuData$.pipe(map(data => data["history-pages"]));
  }

  getBeauGesteButtons(): Observable<ButtonLink[]> {
    return this.menuData$.pipe(map(data => data["beau-geste-pages"]));
  }

  getBeauGesteSetsButton(): Observable<ButtonLink[]> {
    return this.menuData$.pipe(map(data => data["beau-geste-sets"]));
  }

  getChapterButton(): Observable<ButtonLink[]> {
    return this.menuData$.pipe(map(data => data["chapter-btn"]));
  }
}
