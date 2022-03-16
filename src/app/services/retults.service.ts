import { Injectable } from '@angular/core';
import { Results } from '../results';

@Injectable({
  providedIn: 'root',
})
export class RetultsService {
  loding: boolean = false;
  errMessage: string = '';
  results: Results = {
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  };
  constructor() {}

  setLoading(loading: boolean) {
    this.loding = loading;
  }
  setError(text: string) {
    this.errMessage = text;
  }
  setResults(data: any) {
    this.results.cityName = data.location.name;
    this.results.country = data.location.country;
    this.results.temperature = data.current.temp_c;
    this.results.conditionText = data.current.condition.text;
    this.results.icon = data.current.condition.icon;
    console.log(this.results);
  }
  clearResults() {
    this.results.cityName = '';
    this.results.country = '';
    this.results.temperature = '';
    this.results.conditionText = '';
    this.results.icon = '';
  }
}
