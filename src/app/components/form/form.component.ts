import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { WeatherService } from '../../services/weather.service';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  city: string = '';

  constructor(
    private weatherService: WeatherService,
    private resultsService: ResultsService
  ) {}

  ngOnInit(): void {}

  getWeather(getCityForm: any) {
    console.log(this.city);
    this.resultsService.setError('');
    this.resultsService.clearResults();
    this.resultsService.setLoading(true);

    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        console.log(data);
        this.resultsService.setResults(data);
        this.city = '';
        this.resultsService.setLoading(false);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.resultsService.setLoading(false);
        this.resultsService.setError(err.error.error.message);
      }
    );
  }
}
