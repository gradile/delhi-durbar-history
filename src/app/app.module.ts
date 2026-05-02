import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FooterComponent } from './layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhoWeAreComponent } from './layout/who-we-are/who-we-are.component';
import { SubscriptionComponent } from './layout/subscription/subscription.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from '../environments/environment';

import { BeauGesteModule } from './beau-geste/beau-geste.module';
import { DurbarHistoryModule } from './durbar-history/durbar-history.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { StatesModule } from './states/states.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WhoWeAreComponent,
    SubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    FontAwesomeModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaV3Module,
    BeauGesteModule,
    DurbarHistoryModule,
    SharedModule,
    RouterModule,
    LayoutModule,
    StatesModule,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey  },
    { provide: MatDialogRef,  useValue: {} },
    { provide: MatMenuModule, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
