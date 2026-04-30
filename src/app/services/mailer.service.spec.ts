import { TestBed } from '@angular/core/testing';
import { MailerService } from './mailer.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MailerService', () => {
  let service: MailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(MailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
