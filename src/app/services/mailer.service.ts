import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MailerService {
  constructor(private httpClient: HttpClient) {}

  API_SERVER = './mailerApi/api/smtpEmail.php';

  sendEmail(data: any) {
    return this.httpClient.post(this.API_SERVER, data);
  }

}
