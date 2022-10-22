import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Credentials } from '../../models/credentials.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.group({
    email: [
      { value: 'tour@f.heroes', disabled: true },
      [Validators.email, Validators.required],
    ],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.login(this.form.value as Credentials);
    }
  }
}
