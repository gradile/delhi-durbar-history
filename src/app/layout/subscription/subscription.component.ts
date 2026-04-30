import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { MailerService } from '../../services/mailer.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})

export class SubscriptionComponent implements OnInit {
constructor(private mailService: MailerService, private fb: FormBuilder, private recaptchaV3Service: ReCaptchaV3Service) {}
contactForm!: FormGroup;

appearance: MatFormFieldAppearance = 'fill';

  ngOnInit() {
    this.contactForm = this.fb.group({
      contact_email: ['', [Validators.required, Validators.email]]
    });
  }

  getErrorMessage() {
    if (this.contactForm.controls.contact_email.hasError('required')) {
      return 'Email is required';
    }
    return this.contactForm.controls.contact_email.hasError('email') ? 'Not a valid email' : '';
  }

  isSubmitted = false;
  reCAPTCHAToken: string = "";
  tokenVisible: boolean = false;
  onSubmit() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
     // this.tokenVisible = true;
      this.reCAPTCHAToken = `Token [${token}] generated`;
      const data = this.contactForm.getRawValue();
      this.mailService.sendEmail(data).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )});
      this.isSubmitted = true;
    }
}
