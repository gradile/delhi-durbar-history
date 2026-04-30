import { Component } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { SubscriptionComponent } from '../subscription/subscription.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFace = faFacebook;
  faInsta = faInstagram;
  currentYear: number = new Date().getFullYear();

  constructor(public dialog: MatDialog) {
    setInterval(() => {
      this.currentYear = new Date().getFullYear();
    }, 1000 * 60 * 60 * 24 * 365);
  }

  openDialog() {
    this.dialog.open(WhoWeAreComponent, {
      width: 'calc(100vw / 3'
    });
  }

  openSubscribe() {
    this.dialog.open(SubscriptionComponent, {
      width: 'calc(100vw / 4'
    });
  }
}
