import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../environment/environment';
import { Router } from '@angular/router';
import { MATERIAL_COMPONENTS } from '../../utils/angular-material/angular-material';

interface IAuthResponse {
  token: string;
  name: string;
  role: string;
  store_id: string;
  user: IUserProps
}

interface IUserProps {
  id: string
  name: string;
  image_url: string;
  store_id: string;
}

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, ...MATERIAL_COMPONENTS],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})

export class AuthComponent {
  private readonly router = inject(Router)
  private form = inject(FormBuilder)
  private validadtors = Validators

  constructor(private readonly httpClient: HttpClient) { }

  protected formAuth = this.form.group({
    email: ['', [this.validadtors.required, this.validadtors.email]],
    password: ['', [this.validadtors.required, this.validadtors.minLength(6)]]
  })

  onSubmitAuth() {
    if (this.formAuth.valid) {
      this.httpClient
        .post<IAuthResponse>(`${environment.host}:${environment.port}/${environment.routerAuth}`, this.formAuth.value)
        .subscribe({
          next: (response) => {
            localStorage.setItem('token', response.token)
            localStorage.setItem('store_id', response.user.store_id)
            localStorage.setItem('user_id', response.user.id)
            this.router.navigate(['/home'])
          }
        })
    }
  }
}
