import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, Subject } from 'rxjs';

import { Results } from '../results';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  results: Results = {
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  };

  resultsSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getWeather(city: any): Observable<any> {
    console.log(city);
    return this.http
      .get(
        `https://api.weatherapi.com/v1/current.json?key=e45f4be218cb49259cf125320222201&q=${city}&aqi=no`
      )
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      );
  }
}
