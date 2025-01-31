import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResposeData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: false,

  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}
  isLoginMode: boolean = false;
  isLoading: boolean = false;
  error: string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm: NgForm) {
    let authObs: Observable<AuthResposeData>;
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
      console.log('login');
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe({
      next: (user) => {
        this.isLoading = false;
        console.log(user);
        this.router.navigate(['/recipes']);
      },
      error: (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      },
    });
    authForm.reset();
  }
}
