import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../../environment.prod';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  statusMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http.post(`${environment.apiUrl}/contact`, formData)
        .pipe(
          catchError((error) => {
            this.statusMessage = 'Error sending message. Please try again.';
            console.error('Error sending message', error);
            return of(null);
          })
        )
        .subscribe((response: any) => {
          if (response?.message === 'Message sent successfully and saved to database') {
            this.statusMessage = 'Message sent successfully!';
            this.contactForm.reset();
          } else {
            this.statusMessage = 'Something went wrong. Please try again.';
          }
        });
    } else {
      this.statusMessage = 'Please fill out all fields correctly.';
    }
  }
}