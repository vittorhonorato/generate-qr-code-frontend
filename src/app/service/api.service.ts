import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QrCodeRequest, QrCodeResponse } from '../model/qrcode.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = "http://localhost:8080"

  constructor(private http: HttpClient) { }


  post(request: QrCodeRequest): Observable<QrCodeResponse> {
    return this.http.post<QrCodeResponse>(`${this.API_URL}/qrcode`,request);
  }
}
