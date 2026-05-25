import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { QrCodeRequest } from '../model/qrcode.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generate-qr-code.component.html',
  styleUrls: ['./generate-qr-code.component.scss']
})
export class GenerateQrCodeComponent {

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  url: string = '';
  backendError: string = '';

  qrcodeForm = this.fb.group({
    text: ["",Validators.required]
  });

  submit() {
    if (this.qrcodeForm.invalid) {
      this.qrcodeForm.markAllAsTouched();
      return;
    }

    this.backendError = '';
    this.url = '';

    const request: QrCodeRequest = {
      text: this.qrcodeForm.value.text!
    };

    this.apiService.post(request).subscribe({
      next: (response) => {
        this.backendError = '';
        this.url = response.url;
      },
      error: (err : HttpErrorResponse) => {
        this.backendError = this.extractErrorMessage(err);
      }
    });

  }

  private extractErrorMessage(err: HttpErrorResponse): string {
    if (err.error && typeof err.error === 'object' && typeof err.error.text === 'string') {
      return err.error.text;
    }

    if (typeof err.error === 'string' && err.error.trim().length > 0) {
      return err.error;
    }

    return 'Não foi possível gerar o QR Code. Tente novamente.';
  }

}
