import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { WeatherService } from '../../services/weather.service';
import { RetultsService } from '../../services/retults.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  city: string = '';
  errors: any = [];

  constructor(
    private weatherService: WeatherService,
    private resultsService: RetultsService
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
        this.errors = err.error.errors;
        this.resultsService.setLoading(false);
        this.resultsService.setError(err.error.error.message);
      }
    );
  }
}
