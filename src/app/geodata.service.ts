import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GeodataService {
  constructor(private http: HttpClient) { }

  async getCoords(): Promise<Coordinates> {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve(resp.coords)
      }, 
      err => {
        reject(err);
      })
    })
  }

  async getCity() {
    const coords = await this.getCoords();
    let request = environment.reverseGeocodeApi+`latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=ru`;
    return this.http.get(request);
  }
}
