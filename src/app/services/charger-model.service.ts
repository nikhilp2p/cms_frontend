import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChargerModelService {
  private apiUrl = environment.apiBaseUrl;;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/chargingModel/getChargingModelsAll`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  create(model: { name: string; description: string; status: string }) {
  return this.http.post('/api/charger-models', model); // Adjust API URL accordingly
}
}
