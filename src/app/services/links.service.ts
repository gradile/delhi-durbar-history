import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuData } from '../shared/models/menu.model';
import { MenuSection } from '@app/shared/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private readonly menuData$ = this.http
    .get<MenuData>('assets/json/accordion-menu.json')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  constructor(public http: HttpClient) { }

  getMenu(): Observable<MenuSection[]> {
    return this.menuData$.pipe(map(data => data.sections));
  }
}
