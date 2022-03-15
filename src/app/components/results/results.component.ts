import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { WeatherService } from '../../service/weather.service';
import { Results } from '../../results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  results: Results = {
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  };
  Obs!: Observable<any>;
  Subs!: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.Obs = this.weatherService.resultsSubject$;
    this.Subs = this.Obs.subscribe((data) => {
      console.log(data);
      this.results.cityName = data.location.name;
    });
  }

  ngOnDestroy(): void {}
}
