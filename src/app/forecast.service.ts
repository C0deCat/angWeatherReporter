import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  response: any;
  constructor(private http: HttpClient) { }

  Update(): Observable<any> {
    return this.http.get(environment.apiUrl + "onecall?lat=54.215211&lon=45.113163&exclude=minutely&units=metric&lang=ru&appid=" + environment.apiKey)
  }

}
