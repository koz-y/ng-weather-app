import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  constructor() {}

  getWeather(city: any) {
    console.log(city);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=e45f4be218cb49259cf125320222201&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => this.resultsSubject.next(data));
    // .then((data) => console.log(data));
  }
  get resultsSubject$() {
    return this.resultsSubject.asObservable();
  }
}
